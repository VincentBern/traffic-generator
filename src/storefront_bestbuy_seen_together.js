var fs = require("fs");

let runSpecialTestsNumberOfTimes = 100;
let runRandomTestsNumberOfTimes = 0;
let allgood = true;

const BgRed = "\x1b[101m";
const BgGreen = '\x1b[42m';
const FgWhite = "\x1b[37m";
const FgYellow = "\x1b[93m";
const Reset = "\x1b[0m";

function sentResetEvents(browser) {
  browser.execute(function () {
    console.log('resetEvents sent');
    window.postMessage({ action: 'resetEvents' });
  });
}

function getEvents(browser) {
  browser.execute(function () {
    console.log('getEvents sent');
    window.postMessage({ action: 'getEvents', unique: true });
  });
}


//will only examine Status Codes
//will use the mandatoryEvents defined in the JSON
//all mandatory events MUST be present
function examineStatusEvents(browser, mandatoryEvents) {
  browser.pause(2500);
  getEvents(browser);
  browser.pause(2000);

  let oneisbad = false;
  let collectedEvents = [];
  return new Promise((resolve) => {
    browser.execute(function () {
      let href = document.getElementById('myRequestResult').getAttribute('href');
      return { 'json': href };
    }, function (result) {
      let values = JSON.parse(result.value.json);
      console.log(FgWhite + BgGreen + 'Events received:                                                        ' + Reset);
      for (let i = 0; i < values.length; i++) {
        console.log(i + 1 + '.');
        collectedEvents.push({ 'type': values[i].type, 'subtype': values[i].subtype });
        console.log(FgYellow + 'Type                         : ' + values[i].type);
        console.log('Subtype                      : ' + values[i].subtype + Reset);
        console.log('Status                       : ' + values[i].status);
        console.log('Status Code                  : ' + values[i].statusCode);
        if (values[i].status == false) {
          console.log(FgWhite + BgRed + ' ---> MAYDAY BAD STATUS CODES <---' + Reset);
        } else {
          console.log(FgWhite + BgGreen + ' ---> STATUS CODES OK <---' + Reset);

        }
        console.log('URL:     ' + values[i].url);
        console.log('---------------------------------------------------');
        if (values[i].status == false) {
          oneisbad = true;
        }
      }
      //Compare the mandatory vs collectedEvents
      //console.log(JSON.stringify(mandatoryEvents));
      //console.log(JSON.stringify(collectedEvents));
      const missingInCollected = mandatoryEvents
        .filter(item => !collectedEvents
          .find(other => Object.keys(other)
            .every(prop => item[prop] == other[prop]))
        );

      //console.log(JSON.stringify(missingInCollected));
      resolve({ oneisbad: oneisbad, missing: missingInCollected });
    });
  });
}

//will only check the supplied mandatoryEvents
//will use the mandatoryEvents defined in the JSON
//all mandatory events MUST be present
function examineMandatoryEvents(browser, mandatoryEvents) {
  browser.pause(1500);
  getEvents(browser);
  browser.pause(1000);

  let oneisbad = false;
  let collectedEvents = [];
  return new Promise((resolve) => {
    browser.execute(function () {
      let href = document.getElementById('myRequestResult').getAttribute('href');
      return { 'json': href };
    }, function (result) {
      let values = JSON.parse(result.value.json);
      console.log(FgWhite + BgGreen + 'Events received:                                                        ' + Reset);
      for (let i = 0; i < values.length; i++) {
        console.log(i + 1 + '.');
        collectedEvents.push({ 'type': values[i].type, 'subtype': values[i].subtype });
        console.log(FgYellow + 'Type                         : ' + values[i].type);
        console.log('Subtype                      : ' + values[i].subtype + Reset);
        console.log('Status                       : ' + values[i].status);
        console.log('Status Code                  : ' + values[i].statusCode);
        if (values[i].status == false) {
          console.log(FgWhite + BgRed + ' ---> MAYDAY BAD STATUS CODES <---' + Reset);
        } else {
          console.log(FgWhite + BgGreen + ' ---> STATUS CODES OK <---' + Reset);
        }

        //check if event is in MandatoryEvents, if so, check postdata
        let mandatory = false;
        if (mandatoryEvents != undefined) {
          mandatoryEvents.map((event) => {
            if (event.type == values[i].type && event.subtype == values[i].subtype) {
              //Process it
              console.log(FgYellow + '       --> MANDATORY EVENT <--' + Reset);
              if (event.postData != undefined) {
                console.log('Mandatory Postdata: ');
                event.postData.map((post) => {
                  if (values[i].postdata[post] == undefined) {
                    oneisbad = true;
                    console.log(FgWhite + BgRed + ' ' + post + ', Does not exists' + Reset);
                  }
                  else {
                    console.log(FgWhite + BgGreen + ' ' + post + ', Does exists' + Reset);
                  }
                });
              } else {
                console.log('No Mandatory Postdata defined, checks are used from Extension');
                mandatory = true;
                if (values[i].oneisbad == true) {
                  oneisbad = true;
                }
              }
              if (values[i].status == false) {
                oneisbad = true;
              }
            }
          });
        }
        if (mandatory) {
          console.log('All mandatory flags are valid: ' + !values[i].oneisbad);
          if (values[i].oneisbad == true) {
            console.log(FgWhite + BgRed + ' ---> MAYDAY BAD MANDATORY FIELD CHECKS <---' + Reset);
          } else {
            console.log(FgWhite + BgGreen + ' ---> MANDATORY FIELD CHECKS OK <---' + Reset);
          }
        }
        console.log('Final check                  : ' + values[i].finalcheck);
        if (mandatory) {
          if (values[i].finalcheck == false) {
            console.log(FgWhite + BgRed + ' ---> MAYDAY BAD FINAL CHECKS, STATUSCODE & ONEISBAD <---' + Reset);
          } else {
            console.log(FgWhite + BgGreen + ' ---> FINAL CHECKS OK, STATUSCODE & ONEISBAD <---' + Reset);

          }
        }
        console.log('URL:     ' + values[i].url);
        console.log('---------------------------------------------------');
      }
      //Compare the mandatory vs collectedEvents
      //console.log(JSON.stringify(mandatoryEvents));
      //console.log(JSON.stringify(collectedEvents));
      let missingInCollected = [];
      if (mandatoryEvents != undefined) {
        missingInCollected = mandatoryEvents
          .filter(item => !collectedEvents
            .some(other => {
              if (item.type == other.type && item.subtype == other.subtype) return true;
            })
          );
      }
      //console.log(JSON.stringify(missingInCollected));
      if (oneisbad == true) {
        allgood = false;
        console.log(FgWhite + BgRed + ' ---> MAYDAY AT LEAST ONE BAD CODE <---' + Reset);
      } else {
        console.log(FgWhite + BgGreen + ' ---> ALL CODES OK <---' + Reset);
      }
      if (missingInCollected.length > 0) {
        allgood = false;
        console.log(FgWhite + BgRed + ' ---> MAYDAY MISSING MANDATORY EVENTS <---' + Reset);
        console.log(FgWhite + BgRed + ' Missing:')
        missingInCollected.map((miss) => {
          console.log('    Type     : ' + miss.type);
          console.log('    Sub Type : ' + miss.subtype);
        });
        console.log(Reset);
      } else {
        console.log(FgWhite + BgGreen + ' ---> ALL MANDATORY EVENTS PRESENT <---' + Reset);
      }
      resolve({ oneisbad: oneisbad, missing: missingInCollected });
    });
  });
}

function enableRecorder(browser) {
  const url = 'chrome-extension://agbemobelhfkcadfajnbehibhpgkkigk/popup.html';
  browser.url(url);
  browser.pause(1000);
  //check if we need to enable the tracker
  browser.execute(function () {
    let check = false;
    if (document.querySelector('#setSearchTracker input').checked) {
      check = true;
    }
    return check;
  }, function (result) {
    //console.log(result);
    if (result.value) {
      //Nothing to do, reset tracker
      sentResetEvents(browser);
      browser.pause(1000);
      console.log('Tracker already enabled, reset events');
    } else {
      browser.click('#setSearchTracker');
      console.log('Enable Tracker');
      browser.pause(1000);
    }

  });

}

async function downloadReport(browser) {
  const url = 'chrome-extension://agbemobelhfkcadfajnbehibhpgkkigk/popup.html';
  browser.url(url);
  browser.pause(1000);
  browser.click('#download-global');
  browser.pause(1000);
  //Now the id 'myDownloadContent' contains the href -> file, download -> filename
  browser.execute(function () {
    let href = document.getElementById('myDownloadContent').getAttribute('href');
    let download = document.getElementById('myDownloadContent').getAttribute('download');
    return { 'href': href, 'download': download };
  }, function (result) {
    //console.log('result value is:', result);
    var report = fs.createWriteStream('output/' + (result.value.download), { flags: "w" });
    report.write(decodeURIComponent(result.value.href));
    report.close();
  });


  browser.pause(5000);

}
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

  let allgood = await checkEvents("apple", settings.mandatoryEvents);
  if (allgood) {
    RunRandomTests = async () => {
      console.log(
        "**************************** BEGIN Random Tests ***********************"
      );
      console.log("Repeating  : " + runRandomTestsNumberOfTimes);
      console.log("No Of Tests: " + settings.randomKeywords.length);
      for (let j = 0; j < runRandomTestsNumberOfTimes; j++) {
        for (let i = 0; i < settings.randomKeywords.length; i++) {
          console.log(FgYellow + "Running Random Test: " + (j + 1) + "/" + runRandomTestsNumberOfTimes + " with keywords number: " + (i + 1) + "/" + settings.randomKeywords.length + Reset);
          await runRandomTest(
            settings.randomKeywords[i]
          );
        }
      }
      console.log(
        "**************************** END   Random Tests ***********************"
      );
    };

    await RunRandomTests();

    RunSpecialTests = async () => {
      console.log(
        "**************************** BEGIN Special Tests ***********************"
      );
      console.log("Repeating  : " + runSpecialTestsNumberOfTimes);
      console.log("No Of Tests: " + settings.scriptKeywords.length);
      for (let j = 0; j < runSpecialTestsNumberOfTimes; j++) {
        for (let i = 0; i < settings.scriptKeywords.length; i++) {
          console.log(FgYellow + "Running Special Test: " + (j + 1) + "/" + runSpecialTestsNumberOfTimes + " with keywords number: " + (i + 1) + "/" + settings.scriptKeywords.length + Reset);

          await runSpecialTest(
            settings.scriptKeywords[i]
          );
        }
      }
      console.log(
        "**************************** END   Special Tests ***********************"
      );
    };

    allgood = true;
    await RunSpecialTests();
  }
  else {
    console.log(FgWhite + BgRed + ' ---> EVENTS HAVE PROBLEMS, CANCEL TESTS <---' + Reset);
  }

  function runSpecialTest(setting) {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Executing test: " + " with script: " + setting);
    return new Promise((resolve) => {
      test(setting.script, async function (browser) {
        enableRecorder(browser);
        await browser.resizeWindow(1565, 1237);
        await browser.url("https://genericstore.coveodemo.com/searchPage");
        browser.pause(1500);
        for (let i = 0; i < setting.keywords.length - 1; i++) {
          sentResetEvents(browser);
          await browser.CoveoSearch(setting.keywords[i]);
          await browser.CoveoOpenResult("1");
          let result = await examineMandatoryEvents(browser, setting.mandatoryEvents);

        }
        //take the last one and make it random calls
        console.log('Last one, random');
        await browser.CoveoSearch(setting.keywords[setting.keywords.length - 1]);
        await browser.CoveoOpenResult("RND");
        browser.end();
        resolve();
      });
    });
  }

  function runRandomTest(keyword) {
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

  function checkEvents(query, mandatoryEvents) {
    console.log(
      "----------------------------------------------------------------------------"
    );
    console.log("Checking events");
    let allgood = true;
    return new Promise((resolve) => {
      test("Checking Events", async function (browser) {
        enableRecorder(browser);
        await browser.resizeWindow(1565, 1237);
        sentResetEvents(browser);
        browser.pause(1000);
        await browser.url("https://genericstore.coveodemo.com/searchPage");
        browser.pause(1500);
        await browser.CoveoSearch(query);
        await browser.CoveoOpenResult("1");
        let result = await examineStatusEvents(browser, mandatoryEvents);
        if (result.oneisbad == true) {
          console.log(FgWhite + BgRed + ' ---> MAYDAY AT LEAST ONE BAD STATUS CODE <---' + Reset);
          allgood = false;
        } else {
          console.log(FgWhite + BgGreen + ' ---> ALL STATUS CODES OK <---' + Reset);
        }
        if (result.missing.length > 0) {
          allgood = false;
          console.log(FgWhite + BgRed + ' ---> MAYDAY MISSING MANDATORY EVENTS <---' + Reset);
          console.log(FgWhite + BgRed + ' Missing:')
          result.missing.map((miss) => {
            console.log('    Type     : ' + miss.type);
            console.log('    Sub Type : ' + miss.subtype);
          });
          console.log(Reset);
        } else {
          console.log(FgWhite + BgGreen + ' ---> ALL MANDATORY EVENTS PRESENT <---' + Reset);
        }

        browser.pause(2500);
        browser.end();
        resolve(allgood);
      });
    });
  }

  beforeEach(async function (browser) {
    console.log('In BeforeEach');
    await browser.resizeWindow(1565, 1237);
    //enableRecorder(browser);
    await browser.url("https://genericstore.coveodemo.com/searchPage");
    //await browser.url("http://localhost:3000/searchPage");
  });


  /*
  
    test("Macbook Pro", async function (browser) {
      await browser.CoveoSearch("MacBook Pro 15.4 Laptop  Intel Core i9  16GB Memory  ");
      await browser.CoveoOpenResult("1");
      await browser.CoveoSearch("MacBook Pro 13 Display with Touch Bar  Intel Core i5  8GB Memory ");
      await browser.CoveoOpenResult("1");
      await browser.CoveoSearch("MacBook Pro  13 Display with Touch Bar  Intel Core i7  16GB Memory ");
      await browser.CoveoOpenResult("1");
      await browser.CoveoSearch("MacBook Pro  13 Display with Touch Bar  Intel Core i5  16GB Memory ");
      await browser.CoveoOpenResult("1");
      await browser.CoveoSearch("MacBook Pro  13 Display with Touch Bar  Intel Core i5  8GB Memory ");
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
  
    });*/

  afterEach(async function (browser) {
    //downloadReport(browser);
    browser.end();
  });
});
