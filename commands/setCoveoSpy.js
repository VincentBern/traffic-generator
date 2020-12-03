module.exports = class CustomCommand {
  command(selector = ".SearchInterface") {
    return new Promise(resolve => {
      this.api.executeAsync(function (selector, done) {
          Coveo.$(document.querySelector(selector, Coveo.SearchInterface)).on('querySuccess', (e, args) => {
            const {
              query
            } = args;
            const {
              facets,
              groupByResults
            } = args.results;
            window._LAST_COVEO_RESPONSE = JSON.stringify({
              query,
              facets,
              groupByResults
            });
          });
          setTimeout(done, 1);
        },
        [selector],
        resolve);
    });
  }
};
