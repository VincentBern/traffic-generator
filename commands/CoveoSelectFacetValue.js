module.exports = class CoveoSelectFacetValue {
  async command(facetValue, selectValue = true) {

    const getLastResponse = () => new Promise(resolve => {
      this.api.executeAsync(function (done) {
        setTimeout(() => done(window._LAST_COVEO_RESPONSE), 1);
      }, (result) => {
        resolve(JSON.parse(result.value));
      });
    });


    return new Promise(async resolve => {
      let lastResponse = await getLastResponse();
      let aq = lastResponse.query.aq || '';

      if (selectValue) {
        // check if value is not already selected:
        if (aq.includes(`"${facetValue}"`)) {
          console.log('**** ALREADY SELECTED IN QUERY, DO NOTHING');
          return resolve();
        }

        await this.api.waitForElementNotPresent(`li.coveo-selected[data-value="${facetValue}"]`);
        await this.api.click(`li[data-value="${facetValue}"]`);
      } else {
        if (!aq.includes(`"${facetValue}"`)) {
          console.log('**** ALREADY SELECTED NOT IN QUERY, DO NOTHING');
          return resolve();
        }

        await this.api.waitForElementPresent(`li.coveo-selected[data-value="${facetValue}"]`);
        await this.api.click(`li.coveo-selected[data-value="${facetValue}"]`);
      }

      let validatedFacet = false;
      while (!validatedFacet) {
        lastResponse = await getLastResponse();
        aq = lastResponse.query.aq || '';
        const aqHasValue = aq.includes(`"${facetValue}"`);
        if ((selectValue && aqHasValue) || (!selectValue && !aqHasValue)) {
          // facet was applied
          resolve();
          validatedFacet = true;
        } else {
          // try again after a pause;
          await this.api.pause(1000);
        }
      }
    });
  }
};
