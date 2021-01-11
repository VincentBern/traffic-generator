/*==============================================================================*/
/* CoveoResponseChecker generated Fri Jan 08 2021 17:56:47 GMT+0100 (Central European Standard Time) */
/*==============================================================================*/
const config = require("./config");

var DEFAULT_TIMEOUT = 5000;
module.exports = {
  "test case": async function (client) {
    let mypage = client.page.Coveo();
    await mypage.setPause(2000);
    client.resizeWindow(1908, 923);
    client.url(
      "https://search.cloud.coveo.com/pages/workplacedemoqjjnc2v7/full2#t=Dashboard&sort=relevancy"
    );
    client.pause(DEFAULT_TIMEOUT);
    let res = await mypage.loginOffice(config.user, config.pass);
    client.pause(DEFAULT_TIMEOUT);
    //{"type":2,"info":{"tagName":"SELECT","selector":"html > body > #search > .sidebar > .CoveoGetProfiles > #ProfilesDropdown","value":"Marketing","name":"","type":"select-one","id":"ProfilesDropdown","title":"","options":[{"text":"Mark 8","value":"Mark 8"},{"text":"Marketing","value":"Marketing"},{"text":"Marketing Generic","value":"Marketing Generic"},{"text":"No Profile","value":"No Profile"},{"text":"NEW","value":"NEW"}]},"text":""}
    await mypage.c_setValue("#ProfilesDropdown", "Marketing");
    await mypage.c_Pause();
    //{"type":19,"info":{"tagName":"path","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > #teamwidget > :nth-child(1) > .coveo-facet-settings-more > svg > g > .coveo-more-background-svg","id":"","options":[]},"x":658,"y":138,"text":""}
    //{"type":20,"info":{"tagName":"path","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > #teamwidget > :nth-child(1) > .coveo-facet-settings-more > svg > g > .coveo-more-background-svg","id":"","options":[]},"x":658,"y":138,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > #teamwidget > :nth-child(1) > .coveo-facet-settings-more",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > #teamwidget > :nth-child(1) > .coveo-facet-settings-more"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"path","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > #teamwidget > :nth-child(1) > .coveo-facet-settings-more > svg > g > .coveo-more-background-svg","id":"","options":[]},"x":658,"y":138,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-small.coveo-advanced-search-modal.coveo-mod-fade-in-scale > .coveo-modal-content > header > span > svg","id":"","options":[]},"x":381,"y":48,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-small.coveo-advanced-search-modal.coveo-mod-fade-in-scale > .coveo-modal-content > header > span > svg","id":"","options":[]},"x":381,"y":48,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-small.coveo-advanced-search-modal.coveo-mod-fade-in-scale > .coveo-modal-content > header > span > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-small.coveo-advanced-search-modal.coveo-mod-fade-in-scale > .coveo-modal-content > header > span > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"","id":"","options":[]},"x":381,"y":48,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":681,"y":240,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":681,"y":240,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div1 > #RecTeam > #Rec3 > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":681,"y":240,"text":""}
    //{"type":19,"info":{"tagName":"path","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg > g > :nth-child(2)","id":"","options":[]},"x":1837,"y":48,"text":""}
    //{"type":20,"info":{"tagName":"path","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg > g > :nth-child(2)","id":"","options":[]},"x":1837,"y":48,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"path","selector":"","id":"","options":[]},"x":1837,"y":48,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div2 > #RecRecommend > .CoveoRecommendation.CoveoSearchInterface.Coveostate.CoveoComponentState.CoveoComponentOptions.CoveoQueryController.coveo-after-initialization.CoveoDebug > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1052,"y":203,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div2 > #RecRecommend > .CoveoRecommendation.CoveoSearchInterface.Coveostate.CoveoComponentState.CoveoComponentOptions.CoveoQueryController.coveo-after-initialization.CoveoDebug > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1052,"y":203,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div2 > #RecRecommend > .CoveoRecommendation.CoveoSearchInterface.Coveostate.CoveoComponentState.CoveoComponentOptions.CoveoQueryController.coveo-after-initialization.CoveoDebug > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div2 > #RecRecommend > .CoveoRecommendation.CoveoSearchInterface.Coveostate.CoveoComponentState.CoveoComponentOptions.CoveoQueryController.coveo-after-initialization.CoveoDebug > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"html > body > #search > .main > #myDashboardDIV > :nth-child(3) > #div2 > #RecRecommend > .CoveoRecommendation.CoveoSearchInterface.Coveostate.CoveoComponentState.CoveoComponentOptions.CoveoQueryController.coveo-after-initialization.CoveoDebug > .coveo-recommendation-body > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .coveo-result-row > :nth-child(3) > .CoveoQuickview.QV.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1052,"y":203,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg","id":"","options":[]},"x":1835,"y":58,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg","id":"","options":[]},"x":1835,"y":58,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"","id":"","options":[]},"x":1835,"y":58,"text":""}
    //{"type":19,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box > .magic-box-input > input","value":"","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"x":924,"y":51,"text":""}
    //{"type":20,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus > .magic-box-input > input","value":"","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"x":924,"y":51,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box > .magic-box-input > input",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box > .magic-box-input > input"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus > .magic-box-input > input","value":"","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"x":924,"y":51,"text":""}
    //{"type":23,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus > .magic-box-input > input","value":"","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"text":"marketing"}
    await client.clearValue(
      "html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox > .magic-box-input > input"
    );
    await mypage.c_setValue(
      "html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox > .magic-box-input > input",
      "marketing"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"href":"","tagName":"A","selector":"html > body > #search > .sidebar > ul > #tabSearch > #mySideSearch","name":"","type":"","id":"mySideSearch","title":"Search","options":[]},"x":0,"y":0,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .sidebar > ul > #tabSearch > #mySideSearch",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .sidebar > ul > #tabSearch > #mySideSearch"
    );
    await mypage.c_Pause();
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mySearchSection > #mysearchbox > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus.magic-box-notEmpty > .magic-box-input > input","value":"marketing","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label","id":"","title":"HR News","options":[],"label":"HR News (1,915"},"x":408,"y":292,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label","id":"","title":"HR News","options":[],"label":"HR News (1,915"},"x":408,"y":292,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label","id":"","title":"HR News","options":[],"label":"HR News (1,915"},"x":408,"y":292,"text":""}
    //{"type":1,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(2) > label > input","value":"HR News","checked":true,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"HR News (1,915"},"x":408,"y":292,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(2) > label > input",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(2) > label > input"
    );
    await mypage.c_Pause();
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input","value":"HR News","checked":true,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"HR News (1,915"},"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label","id":"","title":"HR News","options":[],"label":"HR News (1,915"},"x":408,"y":292,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label","id":"","title":"HR News","options":[],"label":"HR News (1,915"},"x":408,"y":292,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label","id":"","title":"HR News","options":[],"label":"HR News (1,915"},"x":408,"y":292,"text":""}
    //{"type":1,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input","value":"HR News","checked":false,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"HR News (1,915"},"x":408,"y":292,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input"
    );
    await mypage.c_Pause();
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > :nth-child(2) > label > input","value":"HR News","checked":false,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"HR News (1,915"},"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(6) > label > .coveo-checkbox-span-label","id":"","title":"External Resources","options":[],"label":"External Resources (27"},"x":410,"y":393,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(6) > label > .coveo-checkbox-span-label","id":"","title":"External Resources","options":[],"label":"External Resources (27"},"x":410,"y":393,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(6) > label > .coveo-checkbox-span-label",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(6) > label > .coveo-checkbox-span-label"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(6) > label > .coveo-checkbox-span-label","id":"","title":"External Resources","options":[],"label":"External Resources (27"},"x":410,"y":393,"text":""}
    //{"type":1,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(6) > label > input","value":"External Resources","checked":true,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"External Resources (27"},"x":410,"y":393,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(6) > label > input",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > :nth-child(6) > label > input"
    );
    await mypage.c_Pause();
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(5) > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input","value":"External Resources","checked":true,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"External Resources (27"},"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label","id":"","title":"External Resources","options":[],"label":"External Resources (27"},"x":410,"y":400,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label","id":"","title":"External Resources","options":[],"label":"External Resources (27"},"x":410,"y":400,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > .coveo-checkbox-span-label","id":"","title":"External Resources","options":[],"label":"External Resources (27"},"x":410,"y":400,"text":""}
    //{"type":1,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input","value":"External Resources","checked":false,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"External Resources (27"},"x":410,"y":400,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input"
    );
    await mypage.c_Pause();
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > .CoveoDynamicFacet.coveo-active > .coveo-dynamic-facet-values > :nth-child(6) > label > input","value":"External Resources","checked":false,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"External Resources (27"},"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label","id":"","title":"Presentation Document","options":[],"label":"Presentation Document (38"},"x":423,"y":644,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label","id":"","title":"Presentation Document","options":[],"label":"Presentation Document (38"},"x":423,"y":644,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > :nth-child(2) > label > .coveo-checkbox-span-label","id":"","title":"Presentation Document","options":[],"label":"Presentation Document (38"},"x":423,"y":644,"text":""}
    //{"type":1,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > :nth-child(2) > label > input","value":"Presentation Document","checked":true,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"Presentation Document (38"},"x":423,"y":644,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > :nth-child(2) > label > input",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > :nth-child(2) > label > input"
    );
    await mypage.c_Pause();
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > #search > .main > #mysearch > .coveo-facet-column > :nth-child(6) > .coveo-dynamic-facet-values > .coveo-dynamic-facet-value.coveo-selected > label > input","value":"Presentation Document","checked":true,"name":"","type":"checkbox","src":"","id":"","title":"","options":[],"label":"Presentation Document (38"},"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > #search > .main > #mysearch > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .CoveoTemplateLoader > .coveo-result-frame > :nth-child(1) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":768,"y":353,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > #search > .main > #mysearch > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .CoveoTemplateLoader > .coveo-result-frame > :nth-child(1) > .CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":768,"y":353,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .CoveoTemplateLoader > .coveo-result-frame > :nth-child(1) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .CoveoTemplateLoader > .coveo-result-frame > :nth-child(1) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"html > body > #search > .main > #mysearch > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .CoveoTemplateLoader > .coveo-result-frame > :nth-child(1) > .CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":768,"y":353,"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > .coveo-modal-body.coveo-mod-header-paddding.coveo-mod-form-top-bottom-padding > .coveo-computed-modal-box-content > :nth-child(1) > :nth-child(1) > .coveo-quick-view-full-height > .CoveoDetails > :nth-child(2) > .coveo-folding-header > .coveo-folding-results2 > :nth-child(2) > :nth-child(1) > .CoveoQuickviewEmbedded.CoveoQuickview.coveo-accessible-button > .CoveoFieldValue.display-name > span","id":"","title":"","options":[]},"x":979,"y":732,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > .coveo-modal-body.coveo-mod-header-paddding.coveo-mod-form-top-bottom-padding > .coveo-computed-modal-box-content > :nth-child(1) > :nth-child(1) > .coveo-quick-view-full-height > .CoveoDetails > :nth-child(2) > .coveo-folding-header > .coveo-folding-results2 > :nth-child(2) > :nth-child(1) > .CoveoQuickviewEmbedded.CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > .CoveoFieldValue.display-name > span","id":"","title":"","options":[]},"x":979,"y":732,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > .coveo-modal-body.coveo-mod-header-paddding.coveo-mod-form-top-bottom-padding > .coveo-computed-modal-box-content > :nth-child(1) > :nth-child(1) > .coveo-quick-view-full-height > .CoveoDetails > :nth-child(2) > .coveo-folding-header > .coveo-folding-results2 > :nth-child(2) > :nth-child(1) > .CoveoQuickviewEmbedded.CoveoQuickview.coveo-accessible-button > .CoveoFieldValue.display-name > span",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > .coveo-modal-body.coveo-mod-header-paddding.coveo-mod-form-top-bottom-padding > .coveo-computed-modal-box-content > :nth-child(1) > :nth-child(1) > .coveo-quick-view-full-height > .CoveoDetails > :nth-child(2) > .coveo-folding-header > .coveo-folding-results2 > :nth-child(2) > :nth-child(1) > .CoveoQuickviewEmbedded.CoveoQuickview.coveo-accessible-button > .CoveoFieldValue.display-name > span"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"","id":"","title":"","options":[]},"x":979,"y":732,"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > .coveo-modal-body.coveo-mod-header-paddding.coveo-mod-form-top-bottom-padding > .coveo-computed-modal-box-content > :nth-child(1) > :nth-child(1) > .coveo-quick-view-full-height.People > .userpage-org > .CoveoTeam > :nth-child(5) > .CoveoTemplateLoader > :nth-child(1) > .CoveoQuickviewEmbedded.CoveoQuickview.coveo-accessible-button > .CoveoFieldValue.title > span","id":"","title":"","options":[]},"x":1656,"y":409,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > .coveo-modal-body.coveo-mod-header-paddding.coveo-mod-form-top-bottom-padding > .coveo-computed-modal-box-content > :nth-child(1) > :nth-child(1) > .coveo-quick-view-full-height.People > .userpage-org > .CoveoTeam > :nth-child(5) > .CoveoTemplateLoader > :nth-child(1) > .CoveoQuickviewEmbedded.CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > .CoveoFieldValue.title > span","id":"","title":"","options":[]},"x":1656,"y":409,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > .coveo-modal-body.coveo-mod-header-paddding.coveo-mod-form-top-bottom-padding > .coveo-computed-modal-box-content > :nth-child(1) > :nth-child(1) > .coveo-quick-view-full-height.People > .userpage-org > .CoveoTeam > :nth-child(5) > .CoveoTemplateLoader > :nth-child(1) > .CoveoQuickviewEmbedded.CoveoQuickview.coveo-accessible-button > .CoveoFieldValue.title > span",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > .coveo-modal-body.coveo-mod-header-paddding.coveo-mod-form-top-bottom-padding > .coveo-computed-modal-box-content > :nth-child(1) > :nth-child(1) > .coveo-quick-view-full-height.People > .userpage-org > .CoveoTeam > :nth-child(5) > .CoveoTemplateLoader > :nth-child(1) > .CoveoQuickviewEmbedded.CoveoQuickview.coveo-accessible-button > .CoveoFieldValue.title > span"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"","id":"","title":"","options":[]},"x":1656,"y":409,"text":""}
    //{"type":19,"info":{"tagName":"path","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg > g > :nth-child(1)","id":"","options":[]},"x":1829,"y":50,"text":""}
    //{"type":20,"info":{"tagName":"path","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg > g > :nth-child(1)","id":"","options":[]},"x":1829,"y":50,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"path","selector":"","id":"","options":[]},"x":1829,"y":50,"text":""}
    //{"type":19,"info":{"tagName":"P","selector":"html > body > #search > .main > #mysearch > .AdditionalTabs > div > :nth-child(3) > p","id":"","title":"","options":[]},"x":1040,"y":113,"text":""}
    //{"type":20,"info":{"tagName":"P","selector":"html > body > #search > .main > #mysearch > .AdditionalTabs > div > .CoveoTab.coveo-accessible-button.coveo-accessible-button-pressed > p","id":"","title":"","options":[]},"x":1040,"y":113,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .main > #mysearch > .AdditionalTabs > div > :nth-child(3) > p",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .main > #mysearch > .AdditionalTabs > div > :nth-child(3) > p"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"P","selector":"html > body > #search > .main > #mysearch > .AdditionalTabs > div > .CoveoTab.coveo-accessible-button.coveo-accessible-button-pressed.coveo-selected > p","id":"","title":"","options":[]},"x":1040,"y":113,"text":""}
    //{"type":19,"info":{"tagName":"P","selector":"html > body > #search > .sidebar > ul > #tabmyleader > #mySideLeader > p","id":"","title":"","options":[]},"x":102,"y":600,"text":""}
    //{"type":20,"info":{"tagName":"P","selector":"html > body > #search > .sidebar > ul > #tabmyleader > #mySideLeader > p","id":"","title":"","options":[]},"x":102,"y":600,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .sidebar > ul > #tabmyleader > #mySideLeader > p",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .sidebar > ul > #tabmyleader > #mySideLeader > p"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"P","selector":"html > body > #search > .sidebar > ul > #tabmyleader > #mySideLeader > p","id":"","title":"","options":[]},"x":102,"y":600,"text":""}
    //{"type":19,"info":{"tagName":"P","selector":"html > body > #search > .sidebar > ul > #tabmysearchpeople > #mySidePeople > p","id":"","title":"","options":[]},"x":101,"y":563,"text":""}
    //{"type":20,"info":{"tagName":"P","selector":"html > body > #search > .sidebar > ul > #tabmysearchpeople > #mySidePeople > p","id":"","title":"","options":[]},"x":101,"y":563,"text":""}
    await mypage.c_moveToElement(
      "html > body > #search > .sidebar > ul > #tabmysearchpeople > #mySidePeople > p",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #search > .sidebar > ul > #tabmysearchpeople > #mySidePeople > p"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"P","selector":"html > body > #search > .sidebar > ul > #tabmysearchpeople > #mySidePeople > p","id":"","title":"","options":[]},"x":101,"y":563,"text":""}
  },
};
