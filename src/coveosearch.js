/*==============================================================================*/
/* CoveoResponseChecker generated Fri Jan 08 2021 17:44:17 GMT+0100 (Central European Standard Time) */
/*==============================================================================*/

var DEFAULT_TIMEOUT = 5000;
module.exports = {
  "test case": async function (client) {
    let mypage = client.page.Coveo();
    await mypage.setPause(1000);
    client.resizeWindow(1906, 922);
    client.url("https://www.coveo.com/en");
    client.pause(DEFAULT_TIMEOUT);
    //{"type":19,"info":{"tagName":"INPUT","selector":"html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box > .magic-box-input > input","value":"","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"x":970,"y":119,"text":""}
    //{"type":20,"info":{"tagName":"INPUT","selector":"html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus > .magic-box-input > input","value":"","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"x":970,"y":119,"text":""}
    await mypage.c_moveToElement(
      "html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox > .magic-box-input > input",
      10,
      10
    );
    await mypage.c_click(
      "html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox > .magic-box-input > input"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"INPUT","selector":"html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus > .magic-box-input > input","value":"","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"x":970,"y":119,"text":""}
    //{"type":23,"info":{"tagName":"INPUT","selector":"html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus > .magic-box-input > input","value":"","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"text":"excerpt"}
    await client.clearValue(
      "html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus > .magic-box-input > input"
    );
    await mypage.c_setValue(
      "html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus > .magic-box-input > input",
      "excerpt"
    );
    await mypage.c_Pause();
    //{"type":19,"info":{"tagName":"svg","selector":"html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > a > .coveo-search-button > svg","id":"","options":[]},"x":1413,"y":122,"text":""}
    //{"type":2,"info":{"tagName":"INPUT","selector":"html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox.coveo-query-syntax-disabled.magic-box.magic-box-hasFocus.magic-box-notEmpty > .magic-box-input > input","value":"excerpt","checked":false,"name":"","type":"text","src":"","id":"","title":"Insert a query. Press enter to send","options":[]},"text":""}
    //{"type":20,"info":{"tagName":"svg","selector":"html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > a > .coveo-search-button > svg","id":"","options":[]},"x":1413,"y":122,"text":""}
    await mypage.c_moveToElement(
      "html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > a > .coveo-search-button > svg",
      10,
      10
    );
    await mypage.c_click(
      "html > body > header > #navigation-folder--C2A9DA3E-902E-4742-BE90-5C793F2FDD0D > :nth-child(1) > .row > .col.s12 > .search_container.coveodotcom > .container > :nth-child(7) > #_7B7E94CE-8798-48BF-9C95-F974C255DAAC > .coveo-search-section > #_9B8D4582-D238-453D-BCA6-F77213CE5779_container > #_9B8D4582-D238-453D-BCA6-F77213CE5779 > a > .coveo-search-button > svg"
    );
    await mypage.c_Pause();
    //{"type":19,"info":{"tagName":"SPAN","selector":"html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-facet-column > :nth-child(9) > ul > :nth-child(4) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption","id":"","title":"Product Documentation","options":[],"label":"77 Product Documentation"},"x":251,"y":1028,"text":""}
    //{"type":20,"info":{"tagName":"SPAN","selector":"html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-facet-column > :nth-child(9) > ul > :nth-child(4) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption","id":"","title":"Product Documentation","options":[],"label":"77 Product Documentation"},"x":251,"y":1028,"text":""}
    await mypage.c_moveToElement(
      "html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-facet-column > :nth-child(9) > ul > :nth-child(4) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-facet-column > :nth-child(9) > ul > :nth-child(4) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"tagName":"SPAN","selector":"","id":"","title":"Product Documentation","options":[],"label":"77 Product Documentation"},"x":251,"y":1028,"text":""}
    //{"type":19,"info":{"href":"https://docs.coveo.com/en/417/","tagName":"A","selector":"html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > .coveo-result-row.title > :nth-child(1) > a","name":"","type":"","id":"","title":"","options":[]},"x":714,"y":623,"text":""}
    //{"type":20,"info":{"href":"https://docs.coveo.com/en/417/","tagName":"A","selector":"html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > .coveo-result-row.title > :nth-child(1) > a","name":"","type":"","id":"","title":"","options":[]},"x":714,"y":623,"text":""}
    await mypage.c_moveToElement(
      "html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > .coveo-result-row.title > :nth-child(1) > a",
      10,
      10
    );
    await mypage.c_click(
      "html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > .coveo-result-row.title > :nth-child(1) > a"
    );
    await mypage.c_Pause();
    //{"type":1,"info":{"href":"https://docs.coveo.com/en/417/","tagName":"A","selector":"html > body > #unifiedSearch-wrapper > #unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoResultList > .coveo-result-list-container.coveo-list-layout-container > :nth-child(1) > .coveo-result-frame > .coveo-result-row.title > :nth-child(1) > a","name":"","type":"","id":"","title":"","options":[]},"text":""}
  },
};
