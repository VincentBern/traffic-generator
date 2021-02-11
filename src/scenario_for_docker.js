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

  test("test1", async function (browser) {
    await browser.CoveoSearch("Headless");

    await browser.CoveoSelectFacetValue("Technical Documentation");
    await browser.CoveoSelectFacet("@commonresourcetype");
    await browser.CoveoOpenResult(1);
  });

  test("test2", async function (browser) {
    await browser.CoveoSearch("pushapi");

    // await browser.CoveoSelectFacetValue("Coveo Platform");
    await browser.CoveoClick('#noIntegration', true); // Coveo Platform
    await browser.CoveoSelectFacetValue("Product Documentation");

    await browser.CoveoClickResultLink('Push API Reference');
    await browser.waitForElementVisible('h1#push-api-reference');
  });

  afterEach(browser => browser.end());
});
