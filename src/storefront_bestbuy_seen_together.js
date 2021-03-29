var fs = require("fs");
var events = require('./coveo_events');


let runSpecialTestsNumberOfTimes = 1;
let runRandomTestsNumberOfTimes = 0;
let allgood = true;


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
  let fullreport = [];

  //check if all mandatory events, defined in the settings have valid return codes
  //if not we stop right here
  let allgood = await checkEvents("apple", settings);

  if (allgood) {


    allgood = true;

    //Run special tests first
    RunSpecialTests = async () => {
      console.log(
        "**************************** BEGIN Special Tests ***********************"
      );
      console.log("Repeating  : " + runSpecialTestsNumberOfTimes);
      console.log("No Of Tests: " + settings.scriptKeywords.length);
      let record = true;
      for (let j = 0; j < runSpecialTestsNumberOfTimes; j++) {
        for (let i = 0; i < settings.scriptKeywords.length; i++) {
          console.log(events.FgYellow + "Running Special Test: " + (j + 1) + "/" + runSpecialTestsNumberOfTimes + " with keywords number: " + (i + 1) + "/" + settings.scriptKeywords.length + events.CReset);
          if (record) {
            fullreport.push("");
            fullreport.push("==================================================");
            fullreport.push("Running Special Test: " + (j + 1) + " with keywords number: " + (i + 1) + "/" + settings.scriptKeywords.length);
          }
          await runSpecialTest(
            settings.scriptKeywords[i], settings, record
          );

        }
        record = false;
      }
      console.log(
        "**************************** END   Special Tests ***********************"
      );
    };


    //Run random tests second
    RunRandomTests = async () => {
      console.log(
        "**************************** BEGIN Random Tests ***********************"
      );
      console.log("Repeating  : " + runRandomTestsNumberOfTimes);
      console.log("No Of Tests: " + settings.randomKeywords.length);
      for (let j = 0; j < runRandomTestsNumberOfTimes; j++) {
        for (let i = 0; i < settings.randomKeywords.length; i++) {
          console.log(events.FgYellow + "Running Random Test: " + (j + 1) + "/" + runRandomTestsNumberOfTimes + " with keywords number: " + (i + 1) + "/" + settings.randomKeywords.length + events.CReset);
          await runRandomTest(
            settings.randomKeywords[i], settings
          );
        }
      }
      console.log(
        "**************************** END   Random Tests ***********************"
      );
    };

    await RunSpecialTests();
    await RunRandomTests();

    console.log("Full report: ")
    fullreport.map((rep) => {
      console.log(rep);
    });
    if (allgood) {
      console.log("All good");
    } else {
      console.log("--> AT LEAST ONE BAD CHECK <--");
    }

  }
  else {
    console.log(events.FgWhite + events.BgRed + ' ---> EVENTS HAVE PROBLEMS, CANCEL TESTS <---' + events.CReset);
  }

  function runSpecialTest(setting, settings, record) {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Executing test: " + " with script: " + setting.script);
    return new Promise((resolve) => {
      test(setting.script, async function (browser) {
        //Enable the Recorder
        if (record) events.enableRecorder(browser, settings);
        await browser.resizeWindow(1565, 1237);
        await browser.url(settings.url);
        browser.pause(1500);
        for (let i = 0; i < setting.keywords.length - 1; i++) {
          //Reset the events so that we have a clean array to inspect
          if (record) events.sentResetEvents(browser);
          await browser.CoveoSearch(setting.keywords[i]);
          await browser.CoveoOpenResult("1");
          //Examine the resulting events
          if (record) {
            fullreport.push('Checking mandatory Events: ' + setting.keywords[i]);
            let result = await events.examineMandatoryEvents(browser, setting.mandatoryEvents, fullreport);
            if (result.allgood == false) {
              allgood = false;
            }
          }

        }
        //take the last one and make it random calls
        if (record) {
          events.disableRecorder(browser, settings);
          await browser.url(settings.url);
          browser.pause(1500);
        }
        console.log('Last one, random');
        await browser.CoveoSearch(setting.keywords[setting.keywords.length - 1]);
        await browser.CoveoOpenResult("RND");
        browser.end();
        resolve();
      });
    });
  }

  function runRandomTest(keyword, settings) {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Executing test: " + "with keyword: " + keyword);
    return new Promise((resolve) => {
      test("searchAndClick", async function (browser) {
        await browser.resizeWindow(1565, 1237);
        await browser.url(settings.url);
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

  function checkEvents(query, settings) {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Checking events");
    let allgood = true;
    return new Promise((resolve) => {
      test("Checking Events", async function (browser) {
        //Make sure to execute a test so that all events are touched.
        //Enable the recorder of the chrome extension
        events.enableRecorder(browser, settings);
        await browser.resizeWindow(1565, 1237);

        //Reset the events so that we have a clean array to inspect
        events.sentResetEvents(browser);

        //Do our script
        browser.pause(1000);
        await browser.url(settings.url);
        browser.pause(1500);
        await browser.CoveoSearch(query);
        await browser.CoveoOpenResult("1");

        //Examine the results
        let result = await events.examineStatusEvents(browser, settings.mandatoryEvents, fullreport);
        //If one of the checks is bad
        if (result.oneisbad == true) {
          console.log(events.FgWhite + events.BgRed + ' ---> MAYDAY AT LEAST ONE BAD STATUS CODE <---' + events.CReset);
          allgood = false;
        } else {
          console.log(events.FgWhite + events.BgGreen + ' ---> ALL STATUS CODES OK <---' + events.CReset);
        }
        //Or if one of the mandatory events is missing...
        if (result.missing.length > 0) {
          allgood = false;
          console.log(events.FgWhite + events.BgRed + ' ---> MAYDAY MISSING MANDATORY EVENTS <---' + events.CReset);
        } else {
          console.log(events.FgWhite + events.BgGreen + ' ---> ALL MANDATORY EVENTS PRESENT <---' + events.CReset);
        }

        browser.pause(2500);
        browser.end();
        resolve(allgood);
      });
    });
  }

});
