/*==============================================================================*/
/* CoveoResponseChecker generated Mon Jan 18 2021 15:46:48 GMT+0100 (Central European Standard Time) */
/*==============================================================================*/
const fs = require("fs");

async function docheck(client) {
  await client.execute("return window.COVEO_LOADED", (result) => {
    result = result.value;
    if (result == undefined || result == false) {
      client.execute(fs.readFileSync("src/ajaxListener.js").toString());
      client.pause(DEFAULT_TIMEOUT);
      console.log("Added new Ajaxlistener");
    }
  });
}
var DEFAULT_TIMEOUT = 5000;
module.exports = {
  "test case": async function (client) {
    let mypage = client.page.Coveo();
    await mypage.setPause(2000);
    client.resizeWindow(1832, 923);
    client.url(
      "https://docs.coveo.com/en/1674/analyze-usage-data/usage-analytics-reports"
    );
    client.pause(DEFAULT_TIMEOUT);
    docheck(client);
    //await client.execute(fs.readFileSync("src/ajaxListener.js").toString());
    await mypage.c_moveToElement(
      "#coveoConnectHeaderStandaloneSearchbox > .CoveoSearchbox > .CoveoOmnibox.magic-box > .magic-box-input > input",
      10,
      10
    );
    await mypage.c_click(
      "#coveoConnectHeaderStandaloneSearchbox > .CoveoSearchbox > .CoveoOmnibox.magic-box > .magic-box-input > input"
    );
    await mypage.c_Pause();
    await client.clearValue(
      "#coveoConnectHeaderStandaloneSearchbox > .CoveoSearchbox > .CoveoOmnibox.magic-box.magic-box-hasFocus > .magic-box-input > input"
    );
    await mypage.c_setValue(
      "#coveoConnectHeaderStandaloneSearchbox > .CoveoSearchbox > .CoveoOmnibox.magic-box.magic-box-hasFocus > .magic-box-input > input",
      "exchange"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#coveoConnectHeaderStandaloneSearchbox > .CoveoSearchbox > a > .coveo-search-button > svg",
      10,
      10
    );
    await mypage.c_click(
      "#coveoConnectHeaderStandaloneSearchbox > .CoveoSearchbox > a > .coveo-search-button > svg"
    );
    docheck(client);
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > :nth-child(8) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > :nth-child(8) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > :nth-child(3) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > :nth-child(3) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > :nth-child(3) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > :nth-child(3) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > .coveo-facet-value.coveo-facet-selectable.coveo-with-hover.coveo-selected > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > .coveo-facet-value.coveo-facet-selectable.coveo-with-hover.coveo-selected > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > .coveo-result-row.title > :nth-child(1) > a > span",
      10,
      10
    );
    await mypage.c_click(
      "#unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > .coveo-result-row.title > :nth-child(1) > a > span"
    );
    await mypage.c_Pause();
    docheck(client);

    client.getLog("browser", function (result) {
      console.log("Log length: " + result.length);
      result.forEach(function (log) {
        if (log.message.indexOf("requestData") != -1) {
          console.log(
            "[" + log.level + "] " + log.timestamp + " : " + log.message
          );
        }
      });
    });
    /*client.execute("return window.events", (result) => {
      console.log(result.value);
      for (var i = 0; i < result.value.length; i++) {
        let traffic = result.value[i];
        //console.log(traffic);
        let json = JSON.parse(traffic);
        console.log("type:" + json.type);
        console.log("url:" + json.url);
        console.log("data: " + json.obj);
      }
      //console.log(result);
    });*/
  },
};
