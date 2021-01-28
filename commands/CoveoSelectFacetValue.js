module.exports = class CoveoSelectFacetValue {
  async command(facetValue, selectValue = true) {

    return new Promise(async resolve => {
      let lastResponse = await this.api.getLastResponse();
      let aq = (lastResponse.query && lastResponse.query.aq) || '';

      let lastSearchUid = lastResponse.searchUid;

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
      lastResponse = await this.api.CoveoWaitForSearch(lastSearchUid);

      let validatedFacet = false;
      while (!validatedFacet) {
        lastResponse = await this.api.getLastResponse();
        aq = (lastResponse.query && lastResponse.query.aq) || '';
        const aqHasValue = aq.includes(`"${facetValue}"`);
        if ((selectValue && aqHasValue) || (!selectValue && !aqHasValue)) {
          // facet was applied
          validatedFacet = true;
          return resolve({ status: 0 });
        } else {
          // try again after a pause;
          await this.api.pause(250);
        }
      }
    });
  }
};
