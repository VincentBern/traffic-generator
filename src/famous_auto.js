/*==============================================================================*/
/* CoveoResponseChecker generated Fri Jan 15 2021 17:55:17 GMT+0100 (Central European Standard Time) */
/*==============================================================================*/

var DEFAULT_TIMEOUT = 5000;
module.exports = {
  "test case": async function (client) {
    let mypage = client.page.Coveo();
    await mypage.setPause(2000);
    client.resizeWindow(1830, 922);
    client.url("https://www.coveo.com/en");
    client.pause(DEFAULT_TIMEOUT);
    await client.clearValue(
      "#_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox > .magic-box-input > input"
    );
    await mypage.c_setValue(
      "#_9B8D4582-D238-453D-BCA6-F77213CE5779 > .CoveoOmnibox > .magic-box-input > input",
      "exchange"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#_9B8D4582-D238-453D-BCA6-F77213CE5779 > a > .coveo-search-button",
      10,
      10
    );
    await mypage.c_click(
      "#_9B8D4582-D238-453D-BCA6-F77213CE5779 > a > .coveo-search-button"
    );
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
      "#unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoBreadcrumb > .coveo-breadcrumb-clear-all.coveo-accessible-button > div",
      10,
      10
    );
    await mypage.c_click(
      "#unifiedSearchPage > .coveo-main-section > .coveo-results-column > .CoveoBreadcrumb > .coveo-breadcrumb-clear-all.coveo-accessible-button > div"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > :nth-child(9) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption",
      10,
      10
    );
    await mypage.c_click(
      "#unifiedSearchPage > .coveo-main-section > .coveo-facet-column > :nth-child(9) > ul > :nth-child(1) > label > .coveo-facet-value-label-wrapper > .coveo-facet-value-caption"
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
    await mypage.c_moveToElement(
      "#left-panel > .wrapper > .coveo-docs-toc > :nth-child(2) > .parent > .siblings > :nth-child(4) > a",
      10,
      10
    );
    await mypage.c_click(
      "#left-panel > .wrapper > .coveo-docs-toc > :nth-child(2) > .parent > .siblings > :nth-child(4) > a"
    );
    await mypage.c_Pause();
    await mypage.c_moveToElement(
      "#left-panel > .wrapper > .coveo-docs-toc > :nth-child(2) > .parent > ul > :nth-child(5) > a",
      10,
      10
    );
    await mypage.c_click(
      "#left-panel > .wrapper > .coveo-docs-toc > :nth-child(2) > .parent > ul > :nth-child(5) > a"
    );
    await mypage.c_Pause();
  },
};
