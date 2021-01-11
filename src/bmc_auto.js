/*==============================================================================*/
/* CoveoResponseChecker generated Mon Jan 11 2021 09:59:38 GMT+0100 (Central European Standard Time) */
/*==============================================================================*/

var DEFAULT_TIMEOUT = 5000;
module.exports = {
  "test case": async function (client) {
    let mypage = client.page.Coveo();
    await mypage.setPause(1000);
    client.resizeWindow(1906, 1922);
    client.url(
      "https://www.bmc.com/support/resources/support-search.html#q=silent&t=All&sort=relevancy&f:@sysauthor=[BMC%20Communities]"
    );
    client.pause(DEFAULT_TIMEOUT);
    client.getAttribute(".truste_box_overlay iframe", "id", (result) => {
      let frame = client.frame(result.value, (result) => {
        client.click(".pdynamicbutton > a");
        client.click("#gwt-debug-close_id");
      });
    });

    client.click("body");
    client.pause(DEFAULT_TIMEOUT);
    //{"type":19,"info":{"tagName":"INPUT","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > .CoveoOmnibox.magic-box.magic-box-notEmpty > .magic-box-input > input","value":"silent","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"x":910,"y":251,"text":""}
    //{"type":20,"info":{"tagName":"H2","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > h2","id":"","title":"","options":[]},"x":668,"y":232,"text":""}
    //{"type":1,"info":{"tagName":"DIV","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top","id":"","title":"","options":[]},"x":668,"y":232,"text":""}
    //{"type":23,"info":{"tagName":"INPUT","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > .CoveoOmnibox.magic-box.magic-box-notEmpty.magic-box-hasFocus > .magic-box-input > input","value":"silent","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"text":"unix"}
    await client.clearValue(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > .CoveoOmnibox.magic-box > .magic-box-input > input"
    );
    await mypage.c_setValue(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > .CoveoOmnibox.magic-box > .magic-box-input > input",
      "unix"
    );
    await mypage.c_Pause();
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > a > .coveo-search-button > svg","id":"","options":[]},"x":1365,"y":256,"text":""}
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > .CoveoOmnibox.magic-box.magic-box-notEmpty.magic-box-hasFocus > .magic-box-input > input","value":"unix","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > a > .coveo-search-button > svg","id":"","options":[]},"x":1365,"y":256,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > a > .coveo-search-button > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > a > .coveo-search-button > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > .support-section-container.layout-full-bleed.support-search > .layout-inner-wrap > .support-search-top > fieldset > #supprt-search-input > #searchbox > a > .coveo-search-button > svg","id":"","options":[]},"x":1365,"y":256,"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > :nth-child(5) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption","id":"","title":"BladeLogic Database Automation","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> 480 BladeLogic Database Automation"},"x":514,"y":428,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > :nth-child(5) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption","id":"","title":"BladeLogic Database Automation","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> 480 BladeLogic Database Automation"},"x":514,"y":428,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > :nth-child(5) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > :nth-child(5) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"","id":"","title":"BladeLogic Database Automation","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> 480 BladeLogic Database Automation"},"x":514,"y":428,"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > :nth-child(3) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption","id":"","title":"BladeLogic Server Automation Suite","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> +2,469 BladeLogic Server Automation Suite"},"x":516,"y":490,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > :nth-child(3) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption","id":"","title":"BladeLogic Server Automation Suite","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> +2,469 BladeLogic Server Automation Suite"},"x":516,"y":490,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > :nth-child(3) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > .CoveoFacet.coveo-active > ul > :nth-child(3) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"","id":"","title":"BladeLogic Server Automation Suite","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> +2,469 BladeLogic Server Automation Suite"},"x":516,"y":490,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1019,"y":572,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1019,"y":572,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1019,"y":572,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg","id":"","options":[]},"x":1732,"y":21,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg","id":"","options":[]},"x":1732,"y":21,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"","id":"","options":[]},"x":1732,"y":21,"text":""}
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > :nth-child(7) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption","id":"","title":"HTML File","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> 2,924 HTML File"},"x":450,"y":692,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > :nth-child(7) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption","id":"","title":"HTML File","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> 2,924 HTML File"},"x":450,"y":692,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > :nth-child(7) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-facet-column > :nth-child(7) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"","id":"","title":"HTML File","options":[],"label":"s \" form=\"coveo-dummy-form\"> s \" role=\"button\"> 2,924 HTML File"},"x":450,"y":692,"text":""}
    //{"type":19,"info":{"tagName":"DIV","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoBreadcrumb > .coveo-breadcrumb-clear-all.coveo-accessible-button > div","id":"","title":"","options":[]},"x":1496,"y":450,"text":""}
    //{"type":20,"info":{"tagName":"DIV","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoBreadcrumb > .coveo-breadcrumb-clear-all.coveo-accessible-button.coveo-accessible-button-pressed > div","id":"","title":"","options":[]},"x":1496,"y":450,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoBreadcrumb > .coveo-breadcrumb-clear-all.coveo-accessible-button > div",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoBreadcrumb > .coveo-breadcrumb-clear-all.coveo-accessible-button > div"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"DIV","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoBreadcrumb > .coveo-breadcrumb-clear-all.coveo-accessible-button.coveo-accessible-button-pressed > div","id":"","title":"","options":[]},"x":1496,"y":450,"text":""}
    //{"type":19,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(2) > p","id":"","title":"","options":[]},"x":976,"y":376,"text":""}
    //{"type":20,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > .CoveoTab.coveo-accessible-button.coveo-accessible-button-pressed > p","id":"","title":"","options":[]},"x":976,"y":376,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(2) > p",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(2) > p"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > .CoveoTab.coveo-accessible-button.coveo-accessible-button-pressed.coveo-selected > p","id":"","title":"","options":[]},"x":976,"y":376,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1100,"y":532,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1100,"y":532,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1100,"y":532,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg","id":"","options":[]},"x":1738,"y":36,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg","id":"","options":[]},"x":1738,"y":36,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"","id":"","options":[]},"x":1738,"y":36,"text":""}
    //{"type":19,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(3) > p","id":"","title":"","options":[]},"x":1122,"y":375,"text":""}
    //{"type":20,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(3) > p","id":"","title":"","options":[]},"x":1122,"y":375,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(3) > p",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(3) > p"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > .CoveoTab.coveo-accessible-button.coveo-accessible-button-pressed.coveo-selected > p","id":"","title":"","options":[]},"x":1122,"y":375,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(2) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1215,"y":653,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(2) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1215,"y":653,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(2) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(2) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button > :nth-child(1) > .coveo-icon-for-quickview > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(2) > .coveo-result-frame.coveo-email-result > :nth-child(1) > :nth-child(2) > .CoveoQuickview.coveo-accessible-button.coveo-accessible-button-pressed > :nth-child(1) > .coveo-icon-for-quickview > svg","id":"","options":[]},"x":1215,"y":653,"text":""}
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg","id":"","options":[]},"x":1727,"y":33,"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg","id":"","options":[]},"x":1727,"y":33,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"svg","selector":"","id":"","options":[]},"x":1727,"y":33,"text":""}
    //{"type":19,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(5) > p","id":"","title":"","options":[]},"x":1348,"y":373,"text":""}
    //{"type":20,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(5) > p","id":"","title":"","options":[]},"x":1348,"y":373,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(5) > p",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > :nth-child(5) > p"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"P","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .coveo-tab-section > .CoveoTab.coveo-accessible-button.coveo-accessible-button-pressed.coveo-selected > p","id":"","title":"","options":[]},"x":1348,"y":373,"text":""}
    //{"type":19,"info":{"tagName":"IMG","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > .coveo-list-layout.CoveoResult > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .CoveoYouTubeThumbnail > a > div > img","name":"","src":"https://i.ytimg.com/vi/_c9xYEHt2vU/mqdefault.jpg","id":"","title":"Upgrading BSA 8.5.x environments to 8.5.1 Patch 5","options":[]},"x":859,"y":628,"text":""}
    //{"type":20,"info":{"tagName":"IMG","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > .coveo-list-layout.CoveoResult > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .CoveoYouTubeThumbnail > a > div > img","name":"","src":"https://i.ytimg.com/vi/_c9xYEHt2vU/mqdefault.jpg","id":"","title":"Upgrading BSA 8.5.x environments to 8.5.1 Patch 5","options":[]},"x":859,"y":628,"text":""}
    await mypage.c_moveToElement(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > .coveo-list-layout.CoveoResult > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .CoveoYouTubeThumbnail > a > div > img",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > .coveo-list-layout.CoveoResult > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .CoveoYouTubeThumbnail > a > div > img"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"IMG","selector":"html > body > .layout-wrapper > .root.responsivegrid > .aem-Grid.aem-Grid--12.aem-Grid--default--12 > .supportcoveosearch.aem-GridColumn.aem-GridColumn--default--12 > :nth-child(2) > .layout-inner-wrap > #search > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > .coveo-list-layout.CoveoResult > .coveo-result-frame > :nth-child(1) > :nth-child(1) > .CoveoYouTubeThumbnail > a > div > img","name":"","src":"https://i.ytimg.com/vi/_c9xYEHt2vU/mqdefault.jpg","id":"","title":"Upgrading BSA 8.5.x environments to 8.5.1 Patch 5","options":[]},"x":859,"y":628,"text":""}
    //{"type":19,"info":{"tagName":"path","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-youtube-player.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg > g > :nth-child(1)","id":"","options":[]},"x":1734,"y":27,"text":""}
    //{"type":20,"info":{"tagName":"path","selector":"html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-youtube-player.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close > svg > g > :nth-child(1)","id":"","options":[]},"x":1734,"y":27,"text":""}
    await mypage.c_moveToElement(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-youtube-player.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close",
      10,
      10
    );
    await mypage.c_click(
      "html > body > .coveo-modal-container.coveo-opened.coveo-mod-big.coveo-youtube-player.coveo-mod-fade-in-scale > .coveo-modal-content > header > .coveo-small-close"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"path","selector":"","id":"","options":[]},"x":1734,"y":27,"text":""}
  },
};
