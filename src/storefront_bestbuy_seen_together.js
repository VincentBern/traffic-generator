var fs = require("fs");

let runSpecialTestsNumberOfTimes = 3;
let runRandomTestsNumberOfTimes = 2;


//*******************************************************
//loadSettings, load the settings from the json file
//*******************************************************
function loadSettings(filename) {
  const file = fs.readFileSync(filename);
  settings = JSON.parse(file);
  return settings;
}


describe("BestBuy (Storefront headless)", async function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.skipTestcasesOnFail = true;
  this.timeout(3000);
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;
  let settings = loadSettings("input/bestbuy.json");


  RunSpecialTests = async () => {
    console.log(
      "**************************** BEGIN Special Tests ***********************"
    );
    console.log("Repeating  : " + runSpecialTestsNumberOfTimes);
    console.log("No Of Tests: " + settings.randomKeywords.length);
    for (let j = 0; j < runSpecialTestsNumberOfTimes; j++) {
      for (let i = 0; i < settings.randomKeywords.length; i++) {
        await runTest(
          settings.randomKeywords[i]
        );
      }
    }
    console.log(
      "**************************** END   Special Tests ***********************"
    );
  };

  await RunSpecialTests();

  function runTest(keyword) {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Executing test: " + "with keyword: " + keyword);
    return new Promise((resolve) => {
      test("searchAndClick", async function (browser) {
        await browser.resizeWindow(1565, 1237);
        await browser.url("https://genericstore.coveodemo.com/searchPage");
        await browser.CoveoSearch(keyword);
        await browser.CoveoOpenResult("RND");
        await browser.back();
        browser.pause(500);
        await browser.CoveoOpenResult("RND");
        await browser.back();
        browser.pause(500);
        await browser.CoveoOpenResult("RND");
        browser.pause(500);
        browser.end();
        resolve();
      });
    });
  }

  beforeEach(async function (browser) {
    console.log('In BeforeEach');
    await browser.resizeWindow(1565, 1237);
    await browser.url("https://genericstore.coveodemo.com/searchPage");
    //await browser.url("http://localhost:3000/searchPage");
  });




  test("Macbook Pro", async function (browser) {
    await browser.CoveoSearch("MacBook Pro 15.4 Laptop  Intel Core i9  16GB Memory  1TB Solid State Drive");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("MacBook Pro 13 Display with Touch Bar  Intel Core i5  8GB Memory  512GB SSD");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("MacBook Pro  13 Display with Touch Bar  Intel Core i7  16GB Memory  2TB SSD");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("MacBook Pro  13 Display with Touch Bar  Intel Core i5  16GB Memory  256GB SSD");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("MacBook Pro  13 Display with Touch Bar  Intel Core i5  8GB Memory  512GB SSD");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch('Macbook Pro');
    await browser.CoveoOpenResult("RND");

  });

  test("Washer", async function (browser) {
    await browser.CoveoSearch("4.5 Cu. Ft. 14-Cycle Front-Loading Washer with Steam");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("2.4 Cu. Ft. 14-Cycle Front-Loading Washer");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("5.0 Cu. Ft. 12-Cycle Front-Loading Smart Wi-Fi Washer with Steam");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("2.2 Cu. Ft. 12-Cycle High-Efficiency Steam Front-Loading Washer with Steam");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("4.8 Cu. Ft. 12-Cycle High-Efficiency Front-Loading Washer with Steam");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch('14 Cycle Front-Loading Washer');
    await browser.CoveoOpenResult("RND");

  });

  test("Sound Tower", async function (browser) {
    await browser.CoveoSearch("MX-T50 Sound Tower 500W Wireless Speaker");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("Sound Tower Powered Wireless Speaker (Each)");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("Five Wireless Smart Speaker");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("ISB310B Wireless Tailgate Party Speaker");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch("LSX Hi-Res Wireless Speakers");
    await browser.CoveoOpenResult("1");
    await browser.CoveoSearch('Wireless speaker');
    await browser.CoveoOpenResult("RND");

  });

  afterEach(browser => browser.end());
});
