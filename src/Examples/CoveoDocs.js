const CoveoDocsSelectors = require('../../input/selectors/CoveoDocs.json');

describe("Coveo Docs", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://docs.coveo.com/en/search/");
    await browser.setCoveoSpy();
  });

  test("Search", async function (browser) {
    await browser.CoveoSearch("Headless", CoveoDocsSelectors);
    await browser.CoveoSelectFacetValueByText(
      "Technical Documentation", CoveoDocsSelectors, 'interests'
    );
    await browser.CoveoClickResultByNumber(1, CoveoDocsSelectors);
  });

  test("test2", async function (browser) {
    await browser.CoveoSearch("pushapi", CoveoDocsSelectors);
    await browser.CoveoSelectFacetValueByText("Coveo Platform", CoveoDocsSelectors, 'deploymentType');

    await browser.CoveoSelectFacetValueByText("product documentation", CoveoDocsSelectors, 'resourceType');
    await browser.CoveoClickResultByText('Push API Reference', CoveoDocsSelectors);
  });

  afterEach(browser => browser.end());
});
