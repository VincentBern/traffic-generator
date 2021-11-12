const GenericStoreSelectors = require('../../input/selectors/GenericStore.json');
const ProductsBoughtTogether = require("../../input/scenarios/productsBoughtTogether.json");

describe("Running Search Journeys", function () {
  // Nightwatch session config
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://genericstore.coveodemo.com/searchPage?bot=1");
  });

  const setJourney = (keyword, result_title, resolve) => {
    test(`Running: ${keyword}. For ${result_title}`, async (browser) => {
      const pdp = GenericStoreSelectors.productDetailPage;

      await browser.CoveoSearch(keyword);
      await browser.CoveoClickResultByText(result_title);
      await browser.waitForElementVisible(pdp.container);
      await browser.click(pdp.addToCart);
      await browser.pause(1000);
      resolve();
    });
  };

  const checkout = () => {
    test("Checkout and Kill session", async function (browser) {
      const header = GenericStoreSelectors.header;
      const cartPage = GenericStoreSelectors.cartPage;

      await browser.waitForElementVisible(header.cart);
      await browser.click(header.cart);
      await browser.waitForElementVisible(cartPage.container);
      await browser.click(cartPage.checkoutButton);

      await browser.pause(2000);
      await browser.end();
    });
  };

  const RunJourney = async (keyword, result_title) => {
    return new Promise((resolve) => {
      setJourney(keyword, result_title, resolve);
    });
  };

  describe('', async function () {
    RunAsyncTests = async () => {

      // Get values from scenarios
      const scenarios = Object.values(ProductsBoughtTogether.groups);

      // Loop through all Keywords and search values
      for (let i = 0; i < scenarios.length; i++) {
        for (let j = 0; j < scenarios[i].length; j++) {
          await RunJourney(scenarios[i][j].keyword, scenarios[i][j].result_title);
        }

        // Checkout and kill session at the end of each journey
        checkout();
      }
    };

    await RunAsyncTests();
  });
});
