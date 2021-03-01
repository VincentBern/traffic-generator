const settings = require("../input/BestBuy.json");
const StoreFrontSelectors = require("../input/selectors/GenericStore.json");
const ProductsBoughtTogether = require("../input/scenarios/productsBoughtTogether.json");

describe("BestBuy (Storefront headless)", function () {
  // Nightwatch session config
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url(settings.url);
  });

  const setJourney = (keyword, result_title, resolve) => {
    test(`Running: ${keyword}. For ${result_title}`, async (browser) => {
      const pdp = StoreFrontSelectors.listingPage;
      const searchPage = StoreFrontSelectors.searchPage;

      await browser.CoveoHeadlessClearSearchBox();
      await browser.CoveoSearch(keyword);
      await browser.CoveoOpenResultByTitle(
        result_title,
        searchPage.resultListContainer
      );
      await browser.waitForElementVisible(pdp.container);
      await browser.click(pdp.addToCart);
      await browser.pause(1000);
      resolve();
    })
  }

  const checkout = () => {
    test("Checkout and Kill session", async function (browser) {
      const header = StoreFrontSelectors.header;
      const cartPage = StoreFrontSelectors.cartPage;

      await browser.waitForElementVisible(header.cart);
      await browser.click(header.cart);
      await browser.waitForElementVisible(cartPage.container);
      await browser.click(cartPage.checkoutButton);

      await browser.pause(2000);
      await browser.end();
    });
  }

  const RunJourney = async (keyword, result_title) => {
    return new Promise((resolve) => {
      setJourney(keyword, result_title, resolve);
    })
  }

  describe('', async function () {
    RunAsyncTests = async () => {

      // Get values from scenarios
      const scenarios = Object.values(ProductsBoughtTogether.groups);

      // Loop through all Keywords and search values
      for (let i = 0; i < scenarios.length; i++) {
        for (let j = 0; j < scenarios[i].length; j++) {
          await RunJourney(scenarios[i][j].keyword, scenarios[i][j].result_title)
        }

        // Checkout and kill session at the end of each loop
        checkout();
      }
    }

    await RunAsyncTests();
  });
});
