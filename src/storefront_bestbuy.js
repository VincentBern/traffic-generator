const GenericStoreSelectors = require('../input/selectors/GenericStore.json');

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

  test("DNE - Samnsung", async function (browser) {
    await browser.CoveoSearch("washer");
    await browser.CoveoSelectFacetValueByText(["Appliances", "Washers & Dryers", "Washing Machines"]);
    await browser.CoveoClickResult();
  });

  test("DNE - Nintendo Switch", async function (browser) {
    await browser.CoveoSearch("switch console");
    await browser.CoveoSelectFacetValueByText("Nintendo", GenericStoreSelectors.facets.brand);
    await browser.CoveoClickResult();
  });

  test("DNE - Audio-Technica", async function (browser) {
    await browser.CoveoSearch("ATH Headphones");
    await browser.CoveoSelectFacetValueByText("Audio-Technica", GenericStoreSelectors.facets.brand);
    await browser.CoveoClickResult();
  });

  test("DNE - Dryer", async function (browser) {
    await browser.CoveoSearch("Dryer");
    await browser.CoveoSelectFacetValueByText(["Appliances", "Washers & Dryers", "Dryers"]);
    await browser.CoveoClickResult();
  });

  test("DNE - Hand Dryer", async function (browser) {
    await browser.CoveoSearch("Hand Dryer");
    await browser.CoveoSelectFacetValueByText(["Appliances", "Small Kitchen Appliances", "Kitchen Gadgets", "Soap Dispensers & Hand Dryers"]);
    await browser.CoveoClickResult();
  });

  test("DNE - wireless headphones", async function (browser) {
    await browser.CoveoSearch("wireless headphones");
    await browser.CoveoSelectFacetValueByText(["Audio", "Headphones"]);
    await browser.CoveoClickResult();
  });


  test("DNE - ipad pro", async function (browser) {
    await browser.CoveoSearch("ipad pro");
    await browser.CoveoSelectFacetValueByText(["Computers & Tablets", "Tablets", "Apple iPad", "iPad Pro"]);
    await browser.CoveoClickResult();
  });

  test("DNE - flashlight", async function (browser) {
    await browser.CoveoSearch("flashlight");
    await browser.CoveoSelectFacetValueByText(["Home, Furniture & Office", "Lighting", "Flashlights & Portable Lights"]);

    await browser.CoveoHeadlessClearSearchBox();
    await browser.CoveoSearch("flashlight led");

    await browser.CoveoClickResult();
  });

  test("DNE - baby shark", async function (browser) {
    await browser.CoveoSearch("");
    await browser.CoveoSelectFacetValueByText(["Toys, Games & Collectibles", "Toys", "Surprise Toys"]);

    await browser.CoveoHeadlessClearSearchBox();
    await browser.CoveoSearch("baby shark");

    await browser.CoveoClickResult();
  });

  afterEach(async function (browser) {
    await browser.pause(1000); // give some time for events to be sent
    browser.end()
  });
});
