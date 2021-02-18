var fs = require("fs");

function loadSettings(filename) {
  const file = fs.readFileSync(filename);
  settings = JSON.parse(file);
  return settings;
}

describe("BestBuy (Storefront headless)", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;
  let settings = loadSettings("input/BestBuy.json");

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url(settings.url);
  });

  const runSpeicalTests = async (keyword, result_title) => {
    return new Promise((resolve) => {
      test("Search for: " + keyword + ", and click on: " + result_title, async function (browser) {

        await browser.CoveoSearch(keyword);

        // Click on result based on title
        let res = await browser.CoveoOpenResultByTitle(result_title, "#result-list--search-page");

        // Will fail when item is not found after looking for it with pagination
        if (!res) {
          resolve();
          return;
        }

        // Wait for PDP to load
        await browser.waitForElementVisible('#generic-store-pdp');

        // Click on add to Cart button
        await browser.click('.CoveoResultAddToCart');
        await browser.pause(1000);
        resolve();
      });
    })
  }

  describe('Run Add to Cart and Purchase on group of products.', async function () {
    RunAsyncTests = async () => {
      const scenarios = Object.values(settings.scriptScenarios);
      for (let i = 0; i < scenarios.length; i++) {
        for (let j = 0; j < scenarios[i].length; j++) {
          await runSpeicalTests(scenarios[i][j].keyword, scenarios[i][j].result_title)
        }

        test("Kill browser", async function (browser) {
          await browser.waitForElementVisible('#cart-header');
          await browser.click('#cart-header');
          await browser.waitForElementVisible('#generic-store-cart');
          await browser.click('button#checkout');

          await browser.pause(2000);
          await browser.end();
        });
      }
    }

    await RunAsyncTests();
  });
});
