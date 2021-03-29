const TheGYMSelectors = require('../input/selectors/TheGYM.json');

describe("BestBuy (Storefront headless)", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://thegym.coveodemo.com/");
    // await browser.url("http://localhost:3000");
  });

  test("Search", async function (browser) {
    await browser.CoveoSearch("running shoes", TheGYMSelectors);
  });

  test("Search and click random result", async function (browser) {
    await browser.CoveoSearch("running shoes", TheGYMSelectors);
    await browser.CoveoClickResult("RND", TheGYMSelectors);
  });

  test("Search and click (using result title)", async function (browser) {
    await browser.CoveoSearch("running shoes", TheGYMSelectors);
    await browser.CoveoClickResultByText("St-2", TheGYMSelectors);
  });

  test("Search, filter by category facet and click (using result title)", async function (browser) {
    await browser.CoveoSearch("running shoes", TheGYMSelectors);
    await browser.CoveoSelectFacetValueByText(["shoes", "a3 max cushioning"], TheGYMSelectors);
    await browser.CoveoClickResultByText("RICOCHET", TheGYMSelectors);
  });

  test("Search, filter by category facet and click (using result title with exact match)", async function (browser) {
    await browser.CoveoSearch("running shoes", TheGYMSelectors);
    await browser.CoveoSelectFacetValueByText(["shoes", "a3 max cushioning"], TheGYMSelectors);
    await browser.CoveoClickResultByText("RICOCHET", TheGYMSelectors, true);
  });

  test("Search, click and Add to Cart", async function (browser) {
    await browser.CoveoSearch("running shoes", TheGYMSelectors);
    await browser.CoveoClickResultByText("St-2", TheGYMSelectors);
    await browser.waitForElementVisible(TheGYMSelectors.productDetailPage.container);
    await browser.click(TheGYMSelectors.productDetailPage.addToCart);
    await browser.pause(1000);
  });

  afterEach(async function (browser) {
    await browser.pause(1000); // give some time for events to be sent
    browser.end()
  });
});
