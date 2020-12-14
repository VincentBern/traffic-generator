describe("WIMS", function () {
  //Keep browser open when fails
  this.endSessionOnFail = false;
  this.abortOnElementLocateError = false;
  this.abortOnAssertionFailure = false;
  this.waitForConditionTimeout = 5000;

  xtest("Workplace2", async function (browser) {
    const coveo = browser.page.Coveo();
    browser.url(
      "https://search.cloud.coveo.com/pages/workplacedemoqjjnc2v7/full2"
    );
    let result = await coveo.c_loginOffice(
      "adelev@M365x988456.onmicrosoft.com",
      "PASS"
    );
    console.log("Logged in: " + result);
    browser.pause(5000);
  });

  xtest("Philips", function (browser) {
    const coveo = browser.page.Coveo();
    browser.url(
      "https://search-eu.cloud.coveo.com/pages/philips5pi3khvx/Demo#q=one%20blade&first=10&t=All&sort=relevancy"
    );
    browser.pause(5000);
  });

  test("subzero", async function (browser) {
    await browser.url("https://www.subzero-wolf.com/");

    await browser.CoveoClick("#js-allow-cookies");
    await browser.CoveoSearch("grill");

    await browser.waitForElementVisible(".coveo-main-section .CoveoResultList .CoveoResult");
    await browser.waitForElementVisible(
      "xpath",
      `//*[contains(@class,'CoveoResult')]//*[@class='coveo-result']/a[contains(text(), 'Outdoor Grill')]`
    );

    await browser.waitForElementNotPresent(
      "xpath",
      `//*[contains(@class,'CoveoResult')]//*[@class='coveo-result']/a[contains(text(), 'Wine Storage')]`
    );
    await browser.CoveoSearch("cooler");
    await browser.waitForElementVisible(
      "xpath",
      `//*[contains(@class,'CoveoResult')]//*[@class='coveo-result']/a[contains(text(), 'Wine Storage')]`
    );

    browser.end();
  });

  xtest("enbridge", async function (browser) {
    await browser.url("https://www.enbridge.com/about-us");

    await browser.CoveoSearch("gas", "", "#mainSearch");
    await browser.waitForElementVisible(".coveo-main-section .CoveoResultList .CoveoResult");
    await browser.waitForElementVisible(
      "xpath",
      `//*[contains(@class,'CoveoResult')]//div[@class='tile__primary-text' and contains(text(), 'Natural Gas')]`
    );

    browser.url(
      "https://www.enbridge.com/about-us/natural-gas-transmission-and-midstream"
    );
    res = await browser.moveToElement("article:nth-child(4)", 10, 10);

    browser.end();
  });

  xtest("step b: the gym search", async function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.setPause(1000);
    browser.url("https://thegym.coveodemo.com/");

    let res = await coveo.searchAndClickSuggestion(
      "pan",
      "",
      2,
      "#search-input",
      "#form-search > div.search-field-wrap > div > div:nth-child(2)"
    );
    console.log(" Here now: " + res);
    if (res) res = await coveo.selectFacetValue("M");
    if (res)
      res = await coveo.clickResult(
        "2",
        "",
        5,
        "#coveo-result-list4 > div > div:nth-child(2) .card__item-price"
      );
    browser.pause(1000);
    //Add to cart
    if (res) res = await coveo.c_click("form > div > button");
    browser.pause(2000);
    //Click on recommendation
    if (res)
      res = await coveo.clickRecommendation(
        "",
        "",
        3,
        "#homeProductsPopular > div.CoveoResultList > div > div > div > div:nth-child(3) > div > div > div > a > div.card__item-price"
      );
    //New search
    if (res) res = await coveo.search("gloves", "", "#search-input");
    //Hit enter
    browser.keys(browser.Keys.ENTER);
    browser.pause(3000);

    browser.end();
  });

  xtest("Workplace", async function (browser) {
    const coveo = browser.page.Coveo();
    browser.url(
      "https://search.cloud.coveo.com/pages/workplacedemoqjjnc2v7/full2"
    );
    let res = true;
    if (res)
      res = await coveo.loginOffice(
        "adelev@M365x988456.onmicrosoft.com",
        "PASS"
      );
    browser.pause(2000);
    if (res) res = await coveo.c_setValue("#ProfilesDropdown", "Mark 8");
    browser.pause(2000);
    await coveo.makeVisible(".CoveoQuickview");
    await coveo.makeVisible(".CoveoEditWidget");
    //click on quickview widgets
    if (res) res = await coveo.clickQuickview("1", "#Rec2");
    if (res) res = await coveo.clickQuickview("2", "#Rec1");
    if (res)
      res = await coveo.c_click(
        "#teamwidget > div > div.coveo-facet-settings-more"
      );
    if (res) res = await coveo.c_click("body");
    if (res)
      res = await coveo.c_click(
        "#selectedwidget > div > div.coveo-facet-settings-more"
      );
    if (res) res = await coveo.c_click("body");
    if (res) res = await coveo.c_click("#mySidePeople");
    if (res) res = await coveo.c_click("#myDashboard");
    if (res) res = await coveo.searchAndSubmit("mark 8");
    browser.pause(5000);
    //coveo.waitForElementVisible("@searchbox");
    //coveo.search("exchange");
    browser.end();
  });

  xtest("step b: salesforce search", async function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.setPause(1000);
    browser.url("https://help.salesforce.com/home");
    //Get rid of pop up consent
    browser.pause(1000);
    let res = true;
    if (res) res = await coveo.c_click("#onetrust-accept-btn-handler");
    browser.pause(1000);

    if (res)
      res = await coveo.searchAndClickSuggestion(
        "exch",
        "#tds-header-search",
        2
      );
    if (res) res = await coveo.search("exchange", "#tds-header-search");
    if (res) res = await coveo.c_click("#tds-header-search > div > span");
    res = true;
    //Random facets
    if (res) res = await coveo.selectFacet("@objecttype");
    if (res) res = await coveo.deselectFacet();
    if (res) res = await coveo.selectTab("Answers");
    if (res) res = await coveo.selectTab("Articles");
    if (res)
      res = await coveo.c_click(
        "#TopicFacet > ul > li:nth-child(1) > div.coveo-has-childs-toggle > span.coveo-hierarchical-facet-expand"
      );
    if (res)
      res = await coveo.selectFacetValue(
        "All|General Salesforce Functionality|Desktop Add-Ons"
      );
    if (res)
      res = await coveo.deSelectFacetValue(
        "All|General Salesforce Functionality|Desktop Add-Ons"
      );

    if (res) res = await coveo.clickResult("1");
    if (res)
      res = await coveo.clickRecommendation(
        "2",
        "#recommendedtraining_articleview_docs"
      );
    browser.end();
  });

  xtest("step b: bmc search", async function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.setPause(100);
    browser.url("https://www.bmc.com/support/resources/support-search.html");
    browser.getAttribute(".truste_box_overlay iframe", "id", (result) => {
      let frame = browser.frame(result.value, (result) => {
        browser.click(".pdynamicbutton > a");
        browser.click("#gwt-debug-close_id");
      });
    });

    browser.click("body");
    browser.pause(1000);
    let res = true;
    if (res)
      res = await coveo.searchAndClickSuggestion(
        "exch",
        "#supprt-search-input",
        2
      );
    if (res)
      res = await coveo.searchAndSubmit("exchange", "#supprt-search-input");
    //Random facets
    if (res) res = await coveo.selectFacet("@bmcproductname");
    if (res) res = await coveo.deselectFacet();
    if (res) res = await coveo.selectFacet("@bmcproductname");
    if (res) res = await coveo.deselectFacet();
    if (res) res = await coveo.clickQuickview("RND");
    if (res) res = await coveo.clickQuickview("2");
    if (res) res = await coveo.clickResult("1");
    if (res) res = await coveo.clickRecommendation("RND");
    browser.end();
  });

  xtest("step b: coveo search", async function (browser) {
    const coveo = browser.page.Coveo();
    //Set pause between events to 1 second
    coveo.setPause(1000);
    browser.url(
      "https://connect.coveo.com/s/global-search/%40uri#t=All&sort=relevancy"
    );
    let res = true;
    if (res)
      res = await coveo.searchAndClickSuggestion(
        "exch",
        "#unifiedSearchPage",
        2
      );
    if (res)
      res = await coveo.searchAndSubmit("exchange", "#unifiedSearchPage");
    if (res) res = await coveo.makeVisible(".CoveoQuickview");
    browser.elements("css selector", ".CoveoResult", (labels) => {
      console.log(labels.value.length);
    });

    if (res) res = await coveo.clickQuickview("RND");
    if (res) res = await coveo.selectFacetValue("Newsroom");
    browser.pause(1000);
    if (res) res = await coveo.deSelectFacetValue("Newsroom");
    browser.pause(5000);
    //Random facets
    if (res) res = await coveo.selectFacet("@commonresourcetype");
    if (res) res = await coveo.deselectFacet();
    if (res) res = await coveo.selectFacet("@commonplatformcomponent");
    if (res) res = await coveo.deselectFacet();
    if (res) res = await coveo.clickQuickview("2");
    if (res) res = await coveo.clickResult("1");
    if (res) res = await coveo.clickRecommendation("RND");
    browser.end();
  });

  test("step b: motorola search", async function (browser) {
    let res = await browser.url("https://www.motorolasolutions.com/en_us/search.html#t=Tab_All");

    const SEARCH_INTERFACE = '#coveoSearchInterface_main';

    await browser.setCoveoSpy(SEARCH_INTERFACE);

    //Continue with search
    res = await browser.CoveoSearchAndClickSuggestion("ret", 2, SEARCH_INTERFACE);

    await browser.CoveoSearch("retail", SEARCH_INTERFACE);
    await browser.CoveoSelectFacetValue("MSI.com DAM");
    res = await browser.CoveoSelectFacetValue("MSI.com DAM", false); // deselect

    // Random facets
    if (res) res = await browser.CoveoSelectFacet("@source");
    result = browser.CoveoWaitForSearch();

    if (res) res = await browser.CoveoSelectFacet(res.field, res.nthValue);
    result = browser.CoveoWaitForSearch();

    // select tab
    if (res) res = await browser.click('.CoveoTab[data-caption="Tab_PagesDocs__caption"]');
    result = browser.CoveoWaitForSearch();

    // click first result
    if (res) res = await browser.click('.CoveoResult:nth-child(1)');

    browser.end();
  });
});
