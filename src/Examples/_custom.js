const CustomSelectors = require('../../input/selectors/TheGYM.json');

describe("Running Search Journeys", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://thegym.coveodemo.com/");
  });

  test("Search", async function (browser) {
    await browser.CoveoSearch("running shoes", CustomSelectors);
  });

  test("Search and click random result", async function (browser) {
    await browser.CoveoSearch("running shoes", CustomSelectors);
    await browser.CoveoClickResultByNumber("", CustomSelectors);
  });

  test("Search and click (using result title)", async function (browser) {
    await browser.CoveoSearch("running shoes", CustomSelectors);
    await browser.CoveoClickResultByText("St-2", CustomSelectors);
  });

  test("Search, filter by category facet and click (using result title)", async function (browser) {
    await browser.CoveoSearch("running shoes", CustomSelectors);
    await browser.CoveoSelectFacetValueByText(["shoes", "a3 max cushioning"], CustomSelectors);
    await browser.CoveoClickResultByText("RICOCHET", CustomSelectors);
  });

  test("Search, click and Add to Cart", async function (browser) {
    await browser.CoveoSearch("running shoes", CustomSelectors);
    await browser.CoveoClickResultByText("St-2", CustomSelectors);
    await browser.waitForElementVisible(CustomSelectors.productDetailPage.container);
    await browser.click(CustomSelectors.productDetailPage.addToCart);
    await browser.pause(1000);
  });

  afterEach(async function (browser) {
    await browser.pause(1000); // give some time for events to be sent
    browser.end()
  });
});
