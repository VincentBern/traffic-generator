describe("BestBuy (Storefront headless)", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://genericstore.coveodemo.com/");
    // await browser.url("http://localhost:3000");
  });

  test("DNE - Washer", async function (browser) {
    await browser.CoveoSearch("Washer");

    await browser.CoveoSelectFacetValue("Appliances");
    await browser.CoveoSelectFacetValue("Washers & Dryers");
    await browser.CoveoSelectFacetValue("Washing Machines");

    await browser.CoveoOpenResult();
  });

  test("DNE - Dryer", async function (browser) {
    await browser.CoveoSearch("Dryer");

    await browser.CoveoSelectFacetValue("Appliances");
    await browser.CoveoSelectFacetValue("Washers & Dryers");
    await browser.CoveoSelectFacetValue("Dryers");

    await browser.CoveoOpenResult();
  });

  test("DNE - Hand Dryer", async function (browser) {
    await browser.CoveoSearch("Hand Dryer");

    await browser.CoveoSelectFacetValue("Appliances");
    await browser.CoveoSelectFacetValue("Small Kitchen Appliances");
    await browser.CoveoSelectFacetValue("Kitchen Gadgets");
    await browser.CoveoSelectFacetValue("Soap Dispensers & Hand Dryers");

    await browser.CoveoOpenResult();
  });

  test("DNE - wireless headphones", async function (browser) {
    await browser.CoveoSearch("wireless headphones");

    await browser.CoveoSelectFacetValue("Audio");
    await browser.CoveoSelectFacetValue("Headphones");

    await browser.CoveoOpenResult();
  });


  test("DNE - ipad pro", async function (browser) {
    await browser.CoveoSearch("ipad pro");

    await browser.CoveoSelectFacetValue("Computers & Tablets");
    await browser.CoveoSelectFacetValue("Tablets");
    await browser.CoveoSelectFacetValue("Apple iPad");
    await browser.CoveoSelectFacetValue("iPad Pro");

    await browser.CoveoOpenResult();
  });

  test("DNE - flashlight", async function (browser) {
    await browser.CoveoSearch("flashlight");

    await browser.CoveoSelectFacetValue("Home, Furniture & Office");
    await browser.CoveoSelectFacetValue("Lighting");
    await browser.CoveoSelectFacetValue("Flashlights & Portable Lights");

    await browser.CoveoSearch("flashlight led");

    await browser.CoveoOpenResult();
  });

  test("DNE - baby shark", async function (browser) {
    await browser.CoveoSearch("");

    await browser.click("#category-facet--ec_category .CoveoFacetShowMore");
    await browser.CoveoSelectFacetValue("Toys, Games & Collectibles");

    await browser.click("#category-facet--ec_category .CoveoFacetShowMore");
    await browser.CoveoSelectFacetValue("Toys");

    await browser.click("#category-facet--ec_category .CoveoFacetShowMore");
    await browser.pause(1000);
    await browser.click("#category-facet--ec_category .CoveoFacetShowMore");
    await browser.CoveoSelectFacetValue("Surprise Toys");

    await browser.CoveoSearch("baby shark");

    await browser.CoveoOpenResult();
  });

  afterEach(browser => browser.end());
});