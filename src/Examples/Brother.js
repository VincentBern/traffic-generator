const CustomSelectors = require('../../input/selectors/Brother.json');

describe("Running Search Journeys", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://www.brother-usa.com/search");
  });

  test("Search and click random result", async function (browser) {
    await browser.CoveoSearch("printer", CustomSelectors);
    await browser.CoveoSelectTab("Products", CustomSelectors);

    // CLose pop-up modal
    await browser.waitForElementVisible('button[name="bluecoreCloseButton"]');
    await browser.click('button[name="bluecoreCloseButton"]');

    // Click on first result
    await browser.CoveoClickResultByNumber("RND", CustomSelectors);
  });

  test("Search and click FIRST result", async function (browser) {
    await browser.CoveoSearch("ink", CustomSelectors);
    await browser.CoveoSelectTab("Products", CustomSelectors);

    // CLose pop-up modal
    await browser.waitForElementVisible('button[name="bluecoreCloseButton"]');
    await browser.click('button[name="bluecoreCloseButton"]');

    // Click on first result
    await browser.CoveoClickResultByNumber(1, CustomSelectors);
    // await browser.CoveoClickResultByText("SDX125e", CustomSelectors);
  });

  test("Search and click on resilt 'SDX125e'", async function (browser) {
    await browser.CoveoSearch("ink", CustomSelectors);
    await browser.CoveoSelectTab("Products", CustomSelectors);

    // CLose pop-up modal
    await browser.waitForElementVisible('button[name="bluecoreCloseButton"]');
    await browser.click('button[name="bluecoreCloseButton"]');

    // Click on first result
    await browser.CoveoClickResultByText("SDX125e", CustomSelectors);
  });

  afterEach(async function (browser) {
    await browser.pause(1000); // give some time for events to be sent
    browser.end()
  });
});
