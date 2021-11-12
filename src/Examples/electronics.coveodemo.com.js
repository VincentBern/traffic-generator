const SELECTORS = require('../../input/selectors/GenericStore.json');
const GenericStoreSelectors = require('../../input/selectors/GenericStore.json');

describe("Running Search Journeys", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  const buyAndCheckout = async function (browser) {
    const pdp = SELECTORS.productDetailPage;
    await browser.waitForElementVisible(pdp.container);
    await browser.click(pdp.addToCart);
    await browser.pause(1000);

    const header = SELECTORS.header;
    const cartPage = SELECTORS.cartPage;

    await browser.waitForElementVisible(header.cart);
    await browser.click(header.cart);
    await browser.waitForElementVisible(cartPage.container);
    await browser.click(cartPage.checkoutButton);

    await browser.pause(1000);
    await browser.end();
  };


  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://electronics.coveodemo.com/?bot=1");
  });

  test("Facet - Laptop", async function (browser) {
    await browser.CoveoSearch("laptop");
    await browser.CoveoSelectFacetValueByText(["computers & tablets", "laptops", "All Laptops", "PC Laptops"]);
    await browser.CoveoClickResultByNumber();

    await buyAndCheckout(browser);
  });

  test("Facet - Macbook", async function (browser) {
    await browser.CoveoSearch("macbook");
    await browser.CoveoSelectFacetValueByText(["computers & tablets", "laptops", "All Laptops", "MacBooks"]);
    await browser.CoveoClickResultByNumber();

    await buyAndCheckout(browser);
  });

});
