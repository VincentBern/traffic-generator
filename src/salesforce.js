var fs = require("fs");

let runSpecialTestsNumberOfTimes = 0;
let runRandomTestsNumberOfTimes = 2;

//*******************************************************
//loadSettings, load the settings from the json file
//*******************************************************
function loadSettings(filename) {
  const file = fs.readFileSync(filename);
  settings = JSON.parse(file);
  return settings;
}

describe("AutomaticTester", async function () {
  //Keep browser open when fails
  this.endSessionOnFail = true;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;
  let mypage = undefined;
  let settings = loadSettings("input/salesforce.json");
  let ts = new Date(Date.now());
  var logger = fs.createWriteStream(settings.logfile, { flags: "a" });
  logger.write(
    "-------------------------------------------------------------------"
  );
  logger.write("Automatic Tester: " + settings.title);
  logger.write("Test Date       : " + ts.toDateString());
  logger.write(
    "-------------------------------------------------------------------"
  );

  async function initialize(browser) {
    //Initialize page object
    mypage = browser.page.Coveo();
    //Set pause between events to 1 second
    mypage.setPause(1000);
    //Open URL
    browser.url(settings.url);
    //Get rid of pop up consent
    browser.pause(1000);
    await mypage.c_click("#onetrust-accept-btn-handler");
    browser.pause(1000);
  }

  RunSpecialTests = async () => {
    console.log(
      "**************************** BEGIN Special Tests ***********************"
    );
    console.log("Repeating  : " + runSpecialTestsNumberOfTimes);
    console.log("No Of Tests: " + settings.scriptKeywords.length);
    for (let j = 0; j < runSpecialTestsNumberOfTimes; j++) {
      for (let i = 0; i < settings.scriptKeywords.length; i++) {
        await runTest(
          settings.scriptKeywords[i].keyword,
          settings.scriptKeywords[i].script
        );
      }
    }
    console.log(
      "**************************** END   Special Tests ***********************"
    );
  };

  await RunSpecialTests();

  RunRandomTests = async () => {
    console.log(
      "**************************** BEGIN Random Tests ***********************"
    );
    console.log("Repeating  : " + runRandomTestsNumberOfTimes);
    console.log("No Of Tests: " + settings.randomKeywords.length);
    for (let j = 0; j < runRandomTestsNumberOfTimes; j++) {
      for (let i = 0; i < settings.randomKeywords.length; i++) {
        let test = Math.floor(
          Math.random() * Math.floor(settings.randomScripts.length)
        );
        await runTest(settings.randomKeywords[i], settings.randomScripts[test]);
      }
    }
    console.log(
      "**************************** END   Random Tests ***********************"
    );
  };

  await RunRandomTests();
  logger.end();

  function runTest(keyword, script) {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Executing test: " + script + ", with keyword: " + keyword);
    return new Promise((resolve) => {
      if (script == "searchAndClick") {
        test("searchAndClick", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.search(keyword, "#tds-header-search");
          if (res) await browser.keys(browser.Keys.ENTER);
          browser.pause(2000);
          if (res) res = await mypage.clickResult("RND");
          browser.end();
          resolve();
        });
      }
      if (script == "searchAndOpen2x") {
        test("searchAndOpen2x", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.search(keyword, "#tds-header-search");
          if (res) await browser.keys(browser.Keys.ENTER);
          browser.pause(2000);
          if (res) res = await mypage.clickResult("RND", true);
          browser.pause(3000);
          if (res) res = await mypage.clickResult("RND");
          browser.end();
          resolve();
        });
      }
      if (script == "searchAndChangeTab") {
        test("searchAndChangeTab", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.search(keyword, "#tds-header-search");
          if (res) await browser.keys(browser.Keys.ENTER);
          browser.pause(2000);
          if (res) res = await mypage.selectTab("Articles");
          browser.end();
          resolve();
        });
      }
      if (script == "searchSpecial1") {
        test("searchSpecial1", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.search(keyword, "#tds-header-search");
          if (res) await browser.keys(browser.Keys.ENTER);
          browser.pause(1000);
          if (res)
            res = await mypage.c_click(
              "#TopicFacet > ul > li:nth-child(1) > div.coveo-has-childs-toggle > span.coveo-hierarchical-facet-expand"
            );
          if (res)
            res = await mypage.selectFacetValue(
              "All|General Salesforce Functionality|Desktop Add-Ons"
            );
          if (res)
            res = await mypage.deSelectFacetValue(
              "All|General Salesforce Functionality|Desktop Add-Ons"
            );

          if (res) res = await mypage.clickResult("1");
          browser.end();
          resolve();
        });
      }
      if (script == "searchSpecial2") {
        test("searchSpecial2", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.search(keyword, "#tds-header-search");
          if (res) await browser.keys(browser.Keys.ENTER);
          browser.pause(1000);
          if (res) res = await mypage.selectFacet("@objecttype");
          if (res) res = await mypage.deselectFacet();
          browser.end();
          resolve();
        });
      }
    });
  }
});
