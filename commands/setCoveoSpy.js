module.exports = class setCoveoSpy {
  async command(selector = ".CoveoSearchInterface") {
    await this.api.waitForElementPresent(selector);
    return new Promise(resolve => {
      this.api.executeAsync(function (selector, done) { // leave as "function()", syntax like "()=>{}" will not work here.
        Coveo.$$(document.querySelector(selector, Coveo.SearchInterface)).on('querySuccess', (e, args) => {
          const { query } = args;
          const { facets, groupByResults, searchUid } = args.results;
          const results = (args.results.results || []).map(result => ({
            permanentid: result.raw.permanentid,
            title: result.title,
            uri: result.uri,
            urihash: result.raw.urihash,
          }));

          window._LAST_COVEO_RESPONSE = JSON.stringify({
            query,
            facets,
            groupByResults,
            searchUid,
            results,
          });
        });

        setTimeout(done, 1);
      },
        [selector],
        resolve);
    });
  }
};
