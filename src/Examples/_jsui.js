const JSUISelectors = require('../../input/selectors/JSUI.json');

describe("Running Search Journeys", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://www.fasken.com/en");
  });

  test("Search", async function (browser) {
    await browser.click(JSUISelectors.searchBox.button);
    await browser.CoveoSearch("canadian law");
  });

  test("Search and click random result", async function (browser) {
    await browser.click(JSUISelectors.searchBox.button);
    await browser.CoveoSearch("canadian law");
    await browser.CoveoClickResultByNumber();
  });

  test("Search and click (using result title)", async function (browser) {
    await browser.click(JSUISelectors.searchBox.button);
    await browser.CoveoSearch("Canadian Law");
    await browser.CoveoClickResultByText("Daniel R. Law");
  });

  test("Search, filter by 'refiner' facet and click", async function (browser) {
    // Facet selector name (as it appears in custom.JSON file)
    const facetName = "refiner"

    await browser.click(JSUISelectors.searchBox.button);
    await browser.CoveoSearch("Canadian law");
    await browser.CoveoSelectFacetValueByText(["knowledge"], null, facetName);
    await browser.CoveoClickResultByNumber();
  });

  test("Search and click (using result title and large pagination depth)", async function (browser) {
    // Defined facet to be used
    const facetName = "refiner";
    // Go through 20 pages (fetch more results) to find product. Default 5
    const paginationDepth = 5;
    // Result title to search by
    const resultTile = "The Digital Privacy Act: Important Amendments to Canadian Privacy Law";

    await browser.click(JSUISelectors.searchBox.button);
    await browser.CoveoSearch("Canadian law");
    await browser.CoveoSelectFacetValueByText(["knowledge"], null, facetName);
    await browser.CoveoClickResultByText(resultTile, null, paginationDepth);
  });

  test("Search, click and Add to Cart", async function (browser) {
    await browser.CoveoSearch("laptop");
    await browser.CoveoClickResultByText("Neo 15.6\" Laptop - Intel Core i5 - 8GB Memory - 1TB HDD");
    await browser.waitForElementVisible(GenericStoreSelectors.productDetailPage.container);
    await browser.click(GenericStoreSelectors.productDetailPage.addToCart);
    await browser.pause(1000);
  });

  afterEach(async function (browser) {
    await browser.pause(1000); // give some time for events to be sent
    browser.end()
  });
});
