describe("Running Search Journeys", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://genericstore.coveodemo.com/");
  });

  // test("Search", async function (browser) {
  //   await browser.CoveoSearch("laptop");
  // });

  // test("Search and click random result", async function (browser) {
  //   await browser.CoveoSearch("laptop");
  //   await browser.CoveoClickResultByNumber();
  // });

  // test("Search and click (using result title)", async function (browser) {
  //   await browser.CoveoSearch("laptop");
  //   await browser.CoveoClickResultByText("14.0\" Laptop - Intel Celeron N4020 - 4GB Memory - 64GB eMMC - Star Black");
  // });

  // test("Search, filter by category facet and click", async function (browser) {
  //   await browser.CoveoSearch("laptop");
  //   await browser.CoveoSelectFacetValueByText(["computers & tablets", "laptops", "All Laptops", "MacBooks"]);
  //   await browser.CoveoClickResultByNumber();
  // });

  test("Search and click (using result title and set pagination depth)", async function (browser) {
    // Go through 20 pages (fetch more results) to find product. Default 5
    const paginationDepth = 10;
    // Incase that many results match the same time. Default: 1 (takes first match)
    const resultIndex = 1;

    await browser.CoveoSearch("laptop");
    await browser.CoveoSelectFacetValueByText(["Computers & Tablets", "laptops"]);
    await browser.CoveoClickResultByText(
      "VivoBook S15 15.6\" Laptop - Intel Core i7 - 16GB Memory - 512GB SSD",
      null,
      paginationDepth,
      resultIndex
    );
  });

  // test("Search, click and Add to Cart", async function (browser) {
  //   await browser.CoveoSearch("laptop");
  //   await browser.CoveoClickResultByText("Neo 15.6\" Laptop - Intel Core i5 - 8GB Memory - 1TB HDD");
  //   await browser.waitForElementVisible(GenericStoreSelectors.productDetailPage.container);
  //   await browser.click(GenericStoreSelectors.productDetailPage.addToCart);
  //   await browser.pause(1000);
  // });

  afterEach(async function (browser) {
    await browser.pause(1000); // give some time for events to be sent
    browser.end()
  });
});
