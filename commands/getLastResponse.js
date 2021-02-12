module.exports = class getLastResponse {
  async command() {
    if (this.api.globals._HAS_SPY) {
      // using JSUI "spy"
      return new Promise(resolve => {
        this.api.executeAsync(function (done) {
          setTimeout(() => done(window._LAST_COVEO_RESPONSE), 1);
        }, (result) => {
          let response = JSON.parse(result.value) || {};
          // console.log('LastResponse:', response.searchUid);
          resolve(response);
        });
      });
    }

    // in Headless, we set the data-search-uid on the result list, so we can track when it changes
    let result = await this.api.waitForElementPresent('*[data-search-uid]', 1000, false);
    if (result.status !== -1) {
      result = await this.api.getAttribute('*[data-search-uid]', 'data-search-uid');
      if (result !== -1) {
        return { searchUid: result.value };
      }
    }
    return { searchUid: '' };
  }
};
