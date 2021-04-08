var fs = require("fs");
const config = require("./config_EXAMPLE.js");

let runSpecialTestsNumberOfTimes = 1;
let runRandomTestsNumberOfTimes = 1;
let useRandom = false;

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
  let settings = loadSettings("input/workplace.json");
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

  async function initialize(browser, profile = settings.profile) {
    //Initialize page object
    mypage = browser.page.Coveo();
    //Set pause between events to 1 second
    mypage.setPause(1000);
    //Open URL
    browser.url(settings.url);
    await browser.pause(1000);
    let res = await mypage.loginOffice(config.user, config.pass);
    console.log("Logged in: " + res);
    browser.pause(1000);
    if (res) res = await mypage.c_setValue("#ProfilesDropdown", profile);
    browser.pause(2000);
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

  //await RunSpecialTests();

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
        if (!useRandom) {
          test = j;
        }
        await runTest(settings.randomKeywords[i], settings.randomScripts[test]);
      }
    }
    console.log(
      "**************************** END   Random Tests ***********************"
    );
  };
  RunRandomTestsMarketing = async () => {
    console.log(
      "**************************** BEGIN Random Tests Marketing ***********************"
    );
    console.log("Repeating  : " + runRandomTestsNumberOfTimes);
    console.log("No Of Tests: " + settings.randomKeywordsMarketing.length);
    for (let j = 0; j < runRandomTestsNumberOfTimes; j++) {
      for (let i = 0; i < settings.randomKeywordsMarketing.length; i++) {
        let test = Math.floor(
          Math.random() * Math.floor(settings.randomScriptsMarketing.length)
        );
        if (!useRandom) {
          test = j;
        }
        await runTest(
          settings.randomKeywordsMarketing[i],
          settings.randomScriptsMarketing[test]
        );
      }
    }
    console.log(
      "**************************** END   Random Tests Marketing ***********************"
    );
  };

  await RunRandomTestsMarketing();
  await RunRandomTests();
  logger.end();

  function runTest(keyword, script) {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Executing test: " + script + ", with keyword: " + keyword);
    return new Promise((resolve) => {
      if (script == "searchRandomFacetsMarketing") {
        test("searchRandomFacetsMarketing", async function (browser) {
          await initialize(browser, "Marketing");
          let res = true;
          if (res) res = await mypage.searchAndSubmit(keyword);
          browser.pause(1000);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectDynamicFacet("@author");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res)
            res = await mypage.c_click(
              "div.CoveoBreadcrumb > div.coveo-breadcrumb-clear-all.coveo-accessible-button"
            );
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          browser.end();
          resolve();
        });
      }
      if (script == "searchAndChangeTabMarketing") {
        test("searchAndChangeTabMarketing", async function (browser) {
          await initialize(browser, "Marketing");
          let res = true;
          if (res) res = await mypage.searchAndSubmit(keyword);
          browser.pause(1000);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectTab("Files");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectTab("All Content");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          browser.end();
          resolve();
        });
      }
      if (script == "searchAndClick") {
        test("searchAndClick", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.searchAndSubmit(keyword);
          browser.pause(1000);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectFacetValue("Office 365");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectFacetValue("Marketing Blog");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res)
            res = await mypage.c_click(
              "div.CoveoBreadcrumb > div.coveo-breadcrumb-clear-all.coveo-accessible-button"
            );
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          browser.end();
          resolve();
        });
      }
      if (script == "searchRandomFacets") {
        test("searchRandomFacets", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.searchAndSubmit(keyword);
          browser.pause(1000);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectDynamicFacet("@common_category");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectDynamicFacet("@author");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res)
            res = await mypage.c_click(
              "div.CoveoBreadcrumb > div.coveo-breadcrumb-clear-all.coveo-accessible-button"
            );
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          browser.end();
          resolve();
        });
      }
      if (script == "searchAndChangeTab") {
        test("searchAndChangeTab", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.searchAndSubmit(keyword);
          browser.pause(1000);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectTab("Files");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.selectTab("All Content");
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          browser.end();
          resolve();
        });
      }
      if (script == "searchSpecific") {
        test("searchSpecific", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.searchAndSubmit(keyword);
          browser.pause(1000);
          if (res) res = await mypage.clickQuickview("1", "", 10, true, 2);
          if (res) res = await mypage.clickQuickview("2", "", 10, true, 2);
          if (res) res = await mypage.clickQuickview("3", "", 10, true, 2);
          if (res) res = await mypage.clickQuickview("1", "", 10, true, 2);
          browser.end();
          resolve();
        });
      }
      if (script == "clickWidgets") {
        test("clickWidgets", async function (browser) {
          await initialize(browser);
          let res = true;
          await mypage.makeVisible(".CoveoQuickview");
          await mypage.makeVisible(".CoveoEditWidget");
          //click on quickview widgets
          if (res) res = await mypage.clickQuickview("1", "#Rec2");
          if (res) res = await mypage.clickQuickview("2", "#Rec1");
          //click on Edit Widget
          if (res)
            res = await mypage.c_click(
              "#teamwidget > div > div.coveo-facet-settings-more"
            );
          if (res) res = await mypage.c_click("body");
          if (res)
            res = await mypage.c_click(
              "#selectedwidget > div > div.coveo-facet-settings-more"
            );
          if (res) res = await mypage.c_click("body");

          browser.end();
          resolve();
        });
      }
      if (script == "selfService") {
        test("selfService", async function (browser) {
          await initialize(browser);
          let res = true;
          if (res) res = await mypage.c_click("#mySideService");
          if (res) res = await mypage.c_setValue("#SelfTitle", keyword);
          if (res) res = await mypage.clickQuickview("RND", "", 10, true, 2);
          browser.pause(1000);
          browser.end();
          resolve();
        });
      }
    });
  }
});
