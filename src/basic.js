describe("WIMS", function () {
  //Keep browser open when fails
  this.endSessionOnFail = false;
  this.abortOnElementLocateError = false;

  test("Workplace2", function (browser) {
    const coveo = browser.page.Coveo();
    browser.url(
      "https://search.cloud.coveo.com/pages/workplacedemoqjjnc2v7/full2"
    );
    coveo.c_loginOfficev2("adelev@M365x988456.onmicrosoft.com", "&Qwerty 123");
    browser.pause(5000);
  });

  test("Philips", function (browser) {
    const coveo = browser.page.Coveo();
    browser.url(
      "https://search-eu.cloud.coveo.com/pages/philips5pi3khvx/Demo#q=one%20blade&first=10&t=All&sort=relevancy"
    );
    browser.pause(5000);
  });

  test("subzero", function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    browser.url("https://www.subzero-wolf.com/");
    coveo.c_click(".visitNASiteHandler");
    //Open search box
    coveo.c_click("#search-trigger");
    coveo.c_search(
      "grill",
      "",
      "#spotlightSearch .CoveoQuerybox .magic-box-input > input"
    );
    browser.keys(browser.Keys.ENTER);

    browser.pause(3000);
    coveo.c_moveToElement("article:nth-child(2)", 10, 10);
    browser.pause(2000);
    coveo.c_moveToElement("article:nth-child(3)", 10, 10);
    browser.pause(2000);
    coveo.c_moveToElement("article:nth-child(4)", 10, 10);
    browser.pause(5000);

    coveo.c_setPause(1000);
    browser.url("https://www.enbridge.com/about-us");

    coveo.c_search("gas", "", "#mainSearch");
    browser.keys(browser.Keys.ENTER);
    browser.pause(1000);
  });

  test("enbridge", function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    browser.url(
      "https://www.enbridge.com/about-us/natural-gas-transmission-and-midstream"
    );
    browser.pause(3000);
    coveo.c_moveToElement("article:nth-child(2)", 10, 10);
    browser.pause(2000);
    coveo.c_moveToElement("article:nth-child(3)", 10, 10);
    browser.pause(2000);
    coveo.c_moveToElement("article:nth-child(4)", 10, 10);
    browser.pause(5000);

    coveo.c_setPause(1000);
    browser.url("https://www.enbridge.com/about-us");

    coveo.c_search("gas", "", "#mainSearch");
    browser.keys(browser.Keys.ENTER);
    browser.pause(1000);

    coveo.c_moveToElement(
      "#search > div:nth-child(3) > div > div > div.coveo-results-column.search-results > div.CoveoResultList > div.results-container.coveo-result-list-container > div:nth-child(1) > div.small-22.small-centered.medium-uncentered.medium-24.large-8.xlarge-12.medium-wide-only.xlarge-wide-up.columns > article",
      20,
      20
    );
    browser.pause(1000);
    coveo.c_click(
      "#search > div:nth-child(3) > div > div > div.coveo-results-column.search-results > div.CoveoResultList > div.results-container.coveo-result-list-container > div:nth-child(1) > div.small-22.small-centered.medium-uncentered.medium-24.large-8.medium-wide-only.xlarge-wide-up.xlarge-12.columns > article > div.tile__cta > a"
    );
    //************************************************************
    //Could be that current window is switched
    //************************************************************
    let closeCurrentWindow = false;
    browser.windowHandles(function (result) {
      if (result.value.length == 2) {
        handle = result.value[1];
        browser.switchWindow(handle);
        closeCurrentWindow = true;
      }
    });
    //right column
    browser.pause(2000);
    //We first need to move to the element, then the result link will appear
    coveo.c_moveToElement("article:nth-child(2)", 10, 10);
    browser.pause(2000);
    coveo.c_click("article:nth-child(2) > div.tile__cta > a");

    browser.pause(2000);
    //Close the new window
    if (closeCurrentWindow) {
      browser.closeWindow();
      browser.windowHandles(function (result) {
        handle = result.value[0];
        browser.switchWindow(handle);
      });
    }

    browser.url(
      "https://www.enbridge.com/about-us/natural-gas-transmission-and-midstream"
    );
    browser.pause(2000);
    coveo.c_moveToElement("article:nth-child(2)", 10, 10);
    browser.pause(2000);
    coveo.c_moveToElement("article:nth-child(3)", 10, 10);
    browser.pause(2000);
    coveo.c_moveToElement("article:nth-child(4)", 10, 10);
    browser.pause(5000);

    browser.end();
  });

  test("step b: the gym search", function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.c_setPause(1000);
    browser.url("https://thegym.coveodemo.com/");

    coveo.c_searchAndClickSuggestion(
      "pan",
      "",
      2,
      "#search-input",
      "#form-search > div.search-field-wrap > div > div:nth-child(2)"
    );
    coveo.c_selectFacetValue("M");
    coveo.c_clickResult(
      "2",
      "",
      5,
      "#coveo-result-list4 > div > div:nth-child(2) .card__item-price"
    );
    browser.pause(1000);
    //Add to cart
    coveo.c_click("form > div > button");
    browser.pause(2000);
    //Click on recommendation
    coveo.c_clickRecommendation(
      "",
      "",
      3,
      "#homeProductsPopular > div.CoveoResultList > div > div > div > div:nth-child(3) > div > div > div > a > div.card__item-price"
    );
    //New search
    coveo.c_search("gloves", "", "#search-input");
    //Hit enter
    browser.keys(browser.Keys.ENTER);
    browser.pause(3000);

    browser.end();
  });

  test("Workplace", function (browser) {
    const coveo = browser.page.Coveo();
    browser.url(
      "https://search.cloud.coveo.com/pages/workplacedemoqjjnc2v7/full2"
    );
    coveo.c_loginOffice("adelev@M365x988456.onmicrosoft.com", "&Qwerty 123");
    browser.pause(2000);
    coveo.c_setValue("#ProfilesDropdown", "Mark 8");
    browser.pause(2000);
    coveo.c_makeVisible(".CoveoQuickview");
    coveo.c_makeVisible(".CoveoEditWidget");
    //click on quickview widgets
    coveo.c_clickQuickview("1", "#Rec2");
    coveo.c_clickQuickview("2", "#Rec1");
    coveo.c_click("#teamwidget > div > div.coveo-facet-settings-more");
    coveo.c_click("body");
    coveo.c_click("#selectedwidget > div > div.coveo-facet-settings-more");
    coveo.c_click("body");
    coveo.c_click("#mySidePeople");
    coveo.c_click("#myDashboard");
    coveo.c_searchAndSubmit("mark 8");
    browser.pause(5000);
    //coveo.waitForElementVisible("@searchbox");
    //coveo.search("exchange");
    browser.end();
  });

  test("step b: salesforce search", function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.c_setPause(1000);
    browser.url("https://help.salesforce.com/home");
    //Get rid of pop up consent
    browser.pause(1000);
    coveo.c_click("#onetrust-accept-btn-handler");
    browser.pause(1000);

    coveo.c_searchAndClickSuggestion("exch", "#tds-header-search", 2);
    coveo.c_search("exchange", "#tds-header-search");
    coveo.c_click("#tds-header-search > div > span");
    //Random facets
    coveo.c_selectFacet("@objecttype");
    coveo.c_deselectFacet();
    coveo.c_selectTab("Answers");
    coveo.c_selectTab("Articles");
    coveo.c_click(
      "#TopicFacet > ul > li:nth-child(1) > div.coveo-has-childs-toggle > span.coveo-hierarchical-facet-expand"
    );
    coveo.c_selectFacetValue(
      "All|General Salesforce Functionality|Desktop Add-Ons"
    );
    coveo.c_deSelectFacetValue(
      "All|General Salesforce Functionality|Desktop Add-Ons"
    );

    coveo.c_clickResult("1");
    coveo.c_clickRecommendation("2", "#recommendedtraining_articleview_docs");
    browser.end();
  });

  test("step b: bmc search", function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.c_setPause(1000);
    browser.url("https://www.bmc.com/support/resources/support-search.html");
    //Get rid of pop up consent
    browser.pause(1000);
    browser.getAttribute(".truste_box_overlay iframe", "id", (result) => {
      browser.pause(1000);
      browser.frame(result.value).click(".pdynamicbutton > a");
      browser.frame(result.value).click("#gwt-debug-close_id");
    });

    browser.click("body");
    browser.pause(1000);

    coveo.c_searchAndClickSuggestion("exch", "#supprt-search-input", 2);
    coveo.c_searchAndSubmit("exchange", "#supprt-search-input");
    //Random facets
    coveo.c_selectFacet("@bmcproductname");
    coveo.c_deselectFacet();
    coveo.c_selectFacet("@bmcproductname");
    coveo.c_deselectFacet();
    coveo.c_clickQuickview("1");
    coveo.c_clickQuickview("2");
    coveo.c_clickResult("1");
    coveo.c_clickRecommendation("RND");
    browser.end();
  });

  test("step b: coveo search", function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.c_setPause(1000);
    browser.url(
      "https://connect.coveo.com/s/global-search/%40uri#t=All&sort=relevancy"
    );

    coveo.c_searchAndClickSuggestion("exch", "#unifiedSearchPage", 2);
    coveo.c_searchAndSubmit("exchange", "#unifiedSearchPage");
    coveo.c_makeVisible(".CoveoQuickview");
    coveo.c_selectFacetValue("Newsroom");
    browser.pause(1000);
    coveo.c_deSelectFacetValue("Newsroom");
    browser.pause(5000);
    //Random facets
    coveo.c_selectFacet("@commonresourcetype");
    coveo.c_deselectFacet();
    coveo.c_selectFacet("@commonplatformcomponent");
    coveo.c_deselectFacet();
    coveo.c_clickQuickview("1");
    coveo.c_clickQuickview("2");
    coveo.c_clickResult("1");
    coveo.c_clickRecommendation("RND");
    browser.end();
  });
  test("step b: motorola search", function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.c_setPause(1000);
    browser.url(
      "https://www.motorolasolutions.com/en_us/search.html#t=Tab_All"
    );
    browser.pause(1000);
    //Get rid of pop up consent
    browser.getAttribute(".truste_box_overlay iframe", "id", (result) => {
      browser.pause(1000);
      browser.frame(result.value).click(".pdynamicbutton > a");
    });
    browser.pause(1000);
    //Continue with search
    coveo.c_searchAndClickSuggestion("ret", "#coveoSearchInterface_main", 2);
    browser.pause(5000);
    coveo.c_searchAndSubmit("retail", "#coveoSearchInterface_main");
    browser.pause(5000);
    coveo.c_selectFacetValue("MSI.com DAM");
    browser.pause(1000);
    coveo.c_deSelectFacetValue("MSI.com DAM");
    browser.pause(5000);
    //Random facets
    coveo.c_selectFacet("@source");
    coveo.c_deselectFacet();
    coveo.c_selectTab("Tab_PagesDocs__caption");
    coveo.c_clickResult("1");
    browser.end();
  });
});
