/*==============================================================================*/
/* CoveoResponseChecker generated Wed Jan 20 2021 13:23:34 GMT+0100 (Central European Standard Time) */
/*==============================================================================*/

const fs = require("fs");
var DEFAULT_TIMEOUT = 5000;
module.exports = {
  "test case": async function (client) {
    let mypage = client.page.Coveo();
    await mypage.setPause(2000);
    client.resizeWindow(1832, 924);
    client.url("https://www.mondou.com/fr-CA/");
    client.pause(DEFAULT_TIMEOUT);
    await client.execute(fs.readFileSync("src/ajaxListener.js").toString());
    client.pause(DEFAULT_TIMEOUT);
    await mypage.c_moveToElement(
      "#searchbox > .CoveoSearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box > .magic-box-input > input",
      10,
      10
    );
    await mypage.c_click(
      "#searchbox > .CoveoSearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box > .magic-box-input > input"
    );
    await mypage.c_Pause();
    await client.clearValue(
      "#searchbox > .CoveoSearchbox > .CoveoOmnibox > .magic-box-input > input"
    );
    await mypage.c_setValue(
      "#searchbox > .CoveoSearchbox > .CoveoOmnibox > .magic-box-input > input",
      "chien"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement("#searchbox > .CoveoSearchbox > a", 10, 10);
    await mypage.c_click("#searchbox > .CoveoSearchbox > a");
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_RefineBy > ul > :nth-child(2) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_RefineBy > ul > :nth-child(2) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_RefineBy > ul > :nth-child(2) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_RefineBy > ul > :nth-child(2) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_CategoryH > ul > :nth-child(2) > button > .coveo-dynamic-hierarchical-facet-value-label",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_CategoryH > ul > :nth-child(2) > button > .coveo-dynamic-hierarchical-facet-value-label"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_CategoryH > ul > :nth-child(1) > button > div > svg",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_CategoryH > ul > :nth-child(1) > button > div > svg"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_Brand > .coveo-dynamic-facet-values > :nth-child(3) > label > .coveo-checkbox-span-label",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_Brand > .coveo-dynamic-facet-values > :nth-child(3) > label > .coveo-checkbox-span-label"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_Brand > .coveo-dynamic-facet-values > :nth-child(3) > label > input",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_Brand > .coveo-dynamic-facet-values > :nth-child(3) > label > input"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_Brand > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_Brand > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_Brand > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_Brand > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_Brand > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_Brand > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_Brand > .coveo-dynamic-facet-values > :nth-child(3) > label > input",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_Brand > .coveo-dynamic-facet-values > :nth-child(3) > label > input"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#Facet_RefineBy > ul > .coveo-facet-value.coveo-facet-selectable.coveo-with-hover.coveo-selected > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "#Facet_RefineBy > ul > .coveo-facet-value.coveo-facet-selectable.coveo-with-hover.coveo-selected > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-card-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > a > .CoveoImageFieldValue.CoveoFieldValue > span > img",
      10,
      10
    );
    await mypage.c_click(
      "#search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-card-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > a > .CoveoImageFieldValue.CoveoFieldValue > span > img"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "html > body > .wrapper > :nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > ul > :nth-child(2) > button",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .wrapper > :nth-child(3) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > div > ul > :nth-child(2) > button"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#searchbox > .CoveoSearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box > .magic-box-input > input",
      10,
      10
    );
    await mypage.c_click(
      "#searchbox > .CoveoSearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box > .magic-box-input > input"
    );
    await mypage.c_Pause();
    await client.clearValue(
      "#searchbox > .CoveoSearchbox > .CoveoOmnibox > .magic-box-input > input"
    );
    await mypage.c_setValue(
      "#searchbox > .CoveoSearchbox > .CoveoOmnibox > .magic-box-input > input",
      "chat"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-card-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > a > .CoveoImageFieldValue.CoveoFieldValue > span > img",
      10,
      10
    );
    await mypage.c_click(
      "#search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-card-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > a > .CoveoImageFieldValue.CoveoFieldValue > span > img"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement("#addToCartMsg", 10, 10);
    await mypage.c_click("#addToCartMsg");
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#top > .header.affix-top > .navbar-top.header-menu > .container > .list-inline.pull-right > :nth-child(3) > .minicart-notification-summary.displayMiniCartNotification > :nth-child(1) > .minicart-notification-summary-footer > .minicart-notification-summary-controls > .row > div > a",
      10,
      10
    );
    await mypage.c_click(
      "#top > .header.affix-top > .navbar-top.header-menu > .container > .list-inline.pull-right > :nth-child(3) > .minicart-notification-summary.displayMiniCartNotification > :nth-child(1) > .minicart-notification-summary-footer > .minicart-notification-summary-controls > .row > div > a"
    );
    await mypage.c_Pause();

    client.execute("return window.events", (result) => {
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
    });
  },
};
