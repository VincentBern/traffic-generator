describe("BestBuy (Storefront headless)", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    // await browser.url("https://genericstore.coveodemo.com/");
    await browser.url("http://localhost:3000/searchPage");
  });

  test("washer DNE", async function (browser) {
    await browser.CoveoSearch("Washer");

    await browser.CoveoSelectFacetValue("Appliances");
    await browser.CoveoSelectFacetValue("Washers & Dryers");
    await browser.CoveoSelectFacetValue("Washing Machines");

    await browser.CoveoSearch("Dryer");
  });

  afterEach(browser => browser.end());
});
