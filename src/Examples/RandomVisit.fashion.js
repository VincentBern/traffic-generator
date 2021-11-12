describe("Running Search Journeys", function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  beforeEach(async function (browser) {
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://fashion.coveodemo.com/?bot=1");
  });

  test("View products - randomly", async function (browser) {

    const loopSize = 1 + Math.floor(Math.random() * 10);
    console.log(`Random viewing of ${loopSize} products...`);

    // For about 1/3 of the visits, we will buy recommendations associated to products. 
    const areWeBuying = (Math.random() < 0.333);
    let boughtSomething = false;

    console.log('Are we buying ? ' + areWeBuying);

    // buy between 1 and 10 random product, using listing page.
    for (let i = 0; i < loopSize; i++) {
      // Select a "Listing page" at random,
      await browser.CoveoSelectRandomlyFromShopMenu();
      // then Select a Result at Random,
      await browser.CoveoClickResultByNumber();
      // then Select a Color at Random,
      await browser.CoveoSelectRandomColor();

      if (areWeBuying) {

        let items = (await browser.elements('css selector', '.recommendations-card__media')).value;
        if (items.length > 0) {
          // we will click & buy a recommendation, buying the current item too. 
          await browser.CoveoBuy(browser);
          await browser.pause(1000);

          boughtSomething = true;
        }

        let options = { randomElementWasFound: false };
        await browser.CoveoSelectRandomRecommendation(options);
        if (options.randomElementWasFound && Math.random() < 0.5) {
          // found a recommendations and clicked on it, so we buy it now (1 time out of 2)
          await browser.CoveoBuy(browser);
          await browser.pause(1000);

          boughtSomething = true;
        }
      }
      await browser.pause(1000);
    }

    if (boughtSomething) {
      await browser.CoveoCheckout(browser);
    }

  });

});
