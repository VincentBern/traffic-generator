var self = module.exports = {
  BgRed: "\x1b[101m",
  BgGreen: '\x1b[42m',
  FgWhite: "\x1b[37m",
  FgYellow: "\x1b[93m",
  CReset: "\x1b[0m",


  sentResetEvents: function (browser) {
    browser.execute(function () {
      console.log('resetEvents sent');
      window.postMessage({ action: 'resetEvents' });
    });
  },

  getEvents: function (browser) {
    browser.execute(function () {
      console.log('getEvents sent');
      window.postMessage({ action: 'getEvents', unique: true });
    });
  },


  //will only examine Status Codes
  //will use the mandatoryEvents defined in the JSON
  //all mandatory events MUST be present
  examineStatusEvents: function (browser, mandatoryEvents, fullreport) {
    browser.pause(2500);
    self.getEvents(browser);
    browser.pause(2000);

    let oneisbad = false;
    let collectedEvents = [];
    return new Promise((resolve) => {
      browser.execute(function () {
        let href = document.getElementById('myRequestResult').getAttribute('href');
        return { 'json': href };
      }, function (result) {
        let values = JSON.parse(result.value.json);
        fullreport.push('Status Check. Events received:');
        console.log(self.FgWhite + self.BgGreen + 'Events received:                                                        ' + self.CReset);
        for (let i = 0; i < values.length; i++) {
          console.log(i + 1 + '.');
          collectedEvents.push({ 'type': values[i].type, 'subtype': values[i].subtype });
          console.log(self.FgYellow + 'Type                         : ' + values[i].type);
          console.log('Subtype                      : ' + values[i].subtype + self.CReset);
          console.log('Status                       : ' + values[i].status);
          console.log('Status Code                  : ' + values[i].statusCode);
          fullreport.push('Type       : ' + values[i].type);
          fullreport.push('Subtype    : ' + values[i].subtype);
          fullreport.push('Status     : ' + values[i].status);
          fullreport.push('Status Code: ' + values[i].statusCode);
          if (values[i].status == false) {
            fullreport.push('--> BAD status codes <--');
            console.log(self.FgWhite + self.BgRed + ' ---> MAYDAY BAD STATUS CODES <---' + self.CReset);
          } else {
            console.log(self.FgWhite + self.BgGreen + ' ---> STATUS CODES OK <---' + self.CReset);

          }
          fullreport.push('URL        : ' + values[i].url);
          fullreport.push('-----------------------------------------------------------');
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
        if (missingInCollected.length > 0) {
          console.log(self.FgWhite + self.BgRed + ' Missing Mandatory Events:');
          fullreport.push(' Missing Mandatory Events:');
          missingInCollected.map((miss) => {
            console.log('    Type     : ' + miss.type);
            console.log('    Sub Type : ' + miss.subtype);
            fullreport.push('    Type : ' + miss.type + ', Sub Type : ' + miss.subtype);
          });
          console.log(self.CReset);
        }
        //console.log(JSON.stringify(missingInCollected));
        resolve({ oneisbad: oneisbad, missing: missingInCollected });
      });
    });
  },

  //will only check the supplied mandatoryEvents
  //will use the mandatoryEvents defined in the JSON
  //all mandatory events MUST be present
  examineMandatoryEvents: function (browser, mandatoryEvents, fullreport) {
    browser.pause(1500);
    self.getEvents(browser);
    browser.pause(1000);
    let allgood = true;
    let oneisbad = false;
    let collectedEvents = [];
    return new Promise((resolve) => {
      browser.execute(function () {
        let href = document.getElementById('myRequestResult').getAttribute('href');
        return { 'json': href };
      }, function (result) {
        let values = JSON.parse(result.value.json);
        console.log(self.FgWhite + self.BgGreen + 'Events received:                                                        ' + self.CReset);
        for (let i = 0; i < values.length; i++) {
          console.log(i + 1 + '.');
          collectedEvents.push({ 'type': values[i].type, 'subtype': values[i].subtype });
          console.log(self.FgYellow + 'Type                         : ' + values[i].type);
          console.log('Subtype                      : ' + values[i].subtype + self.CReset);
          console.log('Status                       : ' + values[i].status);
          console.log('Status Code                  : ' + values[i].statusCode);
          fullreport.push('Type       : ' + values[i].type);
          fullreport.push('Subtype    : ' + values[i].subtype);
          fullreport.push('Status     : ' + values[i].status);
          fullreport.push('Status Code: ' + values[i].statusCode);
          if (values[i].status == false) {
            fullreport.push('--> BAD status codes <--');
            console.log(self.FgWhite + self.BgRed + ' ---> MAYDAY BAD STATUS CODES <---' + self.CReset);
          } else {
            console.log(self.FgWhite + self.BgGreen + ' ---> STATUS CODES OK <---' + self.CReset);
          }

          //check if event is in MandatoryEvents, if so, check postdata
          let mandatory = false;
          if (mandatoryEvents != undefined) {
            mandatoryEvents.map((event) => {
              if (event.type == values[i].type && event.subtype == values[i].subtype) {
                //Process it
                console.log(self.FgYellow + '       --> MANDATORY EVENT <--' + self.CReset);
                fullreport.push('      --> MANDATORY EVENT <--');
                if (event.postData != undefined) {
                  console.log('Mandatory Postdata: ');
                  fullreport.push('Mandatory Postdata: ');
                  event.postData.map((post) => {
                    if (values[i].postdata[post] == undefined) {
                      oneisbad = true;
                      allgood = false;
                      console.log(self.FgWhite + self.BgRed + ' ' + post + ', Does not exists' + self.CReset);
                      fullreport.push(' ' + post + ', Does not exists');
                    }
                    else {
                      console.log(self.FgWhite + self.BgGreen + ' ' + post + ', Does exists' + self.CReset);
                      fullreport.push(' ' + post + ', Does exists');
                    }
                  });
                } else {
                  console.log('No Mandatory Postdata defined, checks are used from Extension');
                  fullreport.push('No Mandatory Postdata defined, checks are used from Extension');
                  mandatory = true;
                  if (values[i].oneisbad == true) {
                    oneisbad = true;
                    allgood = false;
                  }
                }
                if (values[i].status == false) {
                  oneisbad = true;
                  allgood = false;
                }
              }
            });
          }
          if (mandatory) {
            console.log('All mandatory flags are valid: ' + !values[i].oneisbad);
            fullreport.push('All mandatory flags are valid: ' + !values[i].oneisbad);
            if (values[i].oneisbad == true) {
              console.log(self.FgWhite + self.BgRed + ' ---> MAYDAY BAD MANDATORY FIELD CHECKS <---' + self.CReset);
              fullreport.push(' ---> MAYDAY BAD MANDATORY FIELD CHECKS <---');
            } else {
              console.log(self.FgWhite + self.BgGreen + ' ---> MANDATORY FIELD CHECKS OK <---' + self.CReset);
            }
          }

          console.log('Final check                  : ' + values[i].finalcheck);
          fullreport.push('Final check: ' + values[i].finalcheck);
          if (mandatory) {
            if (values[i].finalcheck == false) {
              fullreport.push(' ---> MAYDAY BAD FINAL CHECKS, STATUSCODE & ONEISBAD <---');
              console.log(self.FgWhite + self.BgRed + ' ---> MAYDAY BAD FINAL CHECKS, STATUSCODE & ONEISBAD <---' + self.CReset);
            } else {
              console.log(self.FgWhite + self.BgGreen + ' ---> FINAL CHECKS OK, STATUSCODE & ONEISBAD <---' + self.CReset);

            }
          }
          fullreport.push('URL        : ' + values[i].url);
          fullreport.push('-----------------------------------------------------------');
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
          fullreport.push(' ---> MAYDAY AT LEAST ONE BAD CODE <---');
          console.log(self.FgWhite + self.BgRed + ' ---> MAYDAY AT LEAST ONE BAD CODE <---' + self.CReset);
        } else {
          console.log(self.FgWhite + self.BgGreen + ' ---> ALL CODES OK <---' + self.CReset);
        }
        if (missingInCollected.length > 0) {
          allgood = false;
          fullreport.push(' ---> MAYDAY MISSING MANDATORY EVENTS <---');
          console.log(self.FgWhite + self.BgRed + ' ---> MAYDAY MISSING MANDATORY EVENTS <---' + self.CReset);
          console.log(self.FgWhite + self.BgRed + ' Missing:')
          fullreport.push(' Missing:');
          missingInCollected.map((miss) => {
            console.log('    Type     : ' + miss.type);
            console.log('    Sub Type : ' + miss.subtype);
            fullreport.push('    Type : ' + miss.type + ', Sub Type : ' + miss.subtype);
          });
          console.log(self.CReset);
        } else {
          console.log(self.FgWhite + self.BgGreen + ' ---> ALL MANDATORY EVENTS PRESENT <---' + self.CReset);
        }
        resolve({ oneisbad: oneisbad, allgood: allgood, missing: missingInCollected });
      });
    });
  },

  enableRecorder: function (browser, settings) {
    const url = settings.chrome_extension;
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
        self.sentResetEvents(browser);
        browser.pause(1000);
        console.log('Tracker already enabled, reset events');
      } else {
        browser.click('#setSearchTracker');
        console.log('Enable Tracker');
        browser.pause(1000);
      }

    });

  },

  disableRecorder: function (browser, settings) {
    const url = settings.chrome_extension;
    browser.url(url);
    browser.pause(1000);
    //check if we need to disable the tracker
    browser.execute(function () {
      let check = false;
      if (document.querySelector('#setSearchTracker input').checked) {
        check = true;
      }
      return check;
    }, function (result) {
      //console.log(result);
      if (!result.value) {
        //Disable tracker
        browser.click('#setSearchTracker');
        console.log('Disable Tracker');
        browser.pause(1000);
      } else {
        console.log('Tracker already disabled, do nothing');
      }

    });

  },

  downloadReport: async function (browser, settings) {
    const url = settings.chrome_extension;
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
}