describe("Running Search Journeys", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://fashion.coveodemo.com/");
  });

  test("Shop - randomly", async function (browser) {

    const loopSize = 1 + Math.floor(Math.random() * 10);
    console.log(`Buying ${loopSize} products...`);

    // buy between 1 and 10 random product, using listing page.
    for (let i = 0; i < loopSize; i++) {
      // Select a "Listing page" at random,
      await browser.CoveoSelectRandomlyFromShopMenu();
      // then Select a Result at Random, 
      await browser.CoveoClickResultByNumber();
      // and buy it
      await browser.CoveoBuy(browser);
    }

    await browser.CoveoCheckout(browser);
  });

});
