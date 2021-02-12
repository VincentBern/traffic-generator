describe("BestBuy (Storefront headless)", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    // await browser.url("https://genericstore.coveodemo.com/");
    await browser.url("http://localhost:3000");
  });

  test("DNE - Washer", async function (browser) {
    await browser.CoveoSearch("Washer");

    await browser.CoveoSelectFacetValue("Appliances");
    await browser.CoveoSelectFacetValue("Washers & Dryers");
    await browser.CoveoSelectFacetValue("Washing Machines");

    await browser.CoveoOpenResult("RND");
  });

  test("DNE - Dryer", async function (browser) {
    await browser.CoveoSearch("Dryer");

    await browser.CoveoSelectFacetValue("Appliances");
    await browser.CoveoSelectFacetValue("Washers & Dryers");
    await browser.CoveoSelectFacetValue("Dryers");

    await browser.CoveoOpenResult("RND");
  });

  test("DNE - Hand Dryer", async function (browser) {
    await browser.CoveoSearch("Hand Dryer");

    await browser.CoveoSelectFacetValue("Appliances");
    await browser.CoveoSelectFacetValue("Small Kitchen Appliances");
    await browser.CoveoSelectFacetValue("Kitchen Gadgets");
    await browser.CoveoSelectFacetValue("Soap Dispensers & Hand Dryers");

    await browser.CoveoOpenResult("RND");
  });

  afterEach(browser => browser.end());
});
