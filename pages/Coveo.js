let prevRND = 1;
let currentPause = 1000;
let currentFacet = "";

const coveoCommands = {
  //*******************************************************
  //getRandomInt, for getting random results
  //*******************************************************
  getRandomInt: function (min, max) {
    let number = Math.floor(Math.random() * Math.floor(10));
    if (number < min) number = min;
    if (number > max) number = max;
    while (prevRND == number) number = this.getRandomInt(min, max);
    return number;
  },
  getMaxResults: function (selector = "") {
    selector += " .CoveoResult";
    let max = 0;
    this.elements("css selector", selector, (labels) => {
      max = labels.length;
    });
    return max;
  },
  //*******************************************************
  //c_setPause, to set timing between events
  //*******************************************************
  c_setPause: function (nr) {
    currentPause = nr;
  },
  //*******************************************************
  //c_makeVisible, make elements visible
  //*******************************************************
  c_makeVisible: function (selector) {
    this.api.execute(
      function (selector) {
        const element = document.querySelectorAll(selector);
        element.forEach((el) => {
          el.setAttribute("style", "display:inherit");
        });
      },
      [selector]
    );
  },
  //*******************************************************
  //c_search, search for text. Do not click on submit
  //*******************************************************
  c_search: function (text, searchinterface = "", specific = "") {
    let selector = "";
    if (searchinterface != "") {
      searchinterface = searchinterface + " ";
    }
    selector += ".CoveoSearchbox .magic-box-input > input";
    if (specific != "") {
      selector = specific;
    }
    return this.waitForElementVisible(searchinterface + selector)
      .clearValue(searchinterface + selector)
      .setValue(searchinterface + selector, text)
      .pause(currentPause);
  },
  //*******************************************************
  //c_searchAndSubmit, search for text and click on submit
  //*******************************************************
  c_searchAndSubmit: function (text, searchinterface = "", specific = "") {
    let selector = "";
    if (searchinterface != "") {
      searchinterface = searchinterface + " ";
    }
    selector += ".CoveoSearchbox .magic-box-input > input";
    if (specific != "") {
      selector = specific;
    }
    return this.waitForElementVisible(searchinterface + selector)
      .clearValue(searchinterface + selector)
      .setValue(searchinterface + selector, text)
      .c_click(searchinterface + ".CoveoSearchButton")
      .pause(currentPause);
  },
  //*******************************************************
  //c_searchAndClickSuggestion, search for text and click on NR suggestion
  //*******************************************************
  c_searchAndClickSuggestion: function (
    text,
    searchinterface = "",
    nr = 0,
    specific = "",
    specificSuggestion = ""
  ) {
    let selector = "";
    if (searchinterface != "") {
      searchinterface = searchinterface + " ";
    }
    selector += ".CoveoSearchbox .magic-box-input > input";
    if (specific != "") {
      selector = specific;
    }
    let selectorSuggestion = "#magic-box-suggestion-" + nr + "";
    if (specificSuggestion != "") {
      selectorSuggestion = specificSuggestion;
    }
    return this.waitForElementVisible(searchinterface + selector)
      .clearValue(searchinterface + selector)

      .setValue(searchinterface + selector, text)
      .click(selectorSuggestion)
      .pause(currentPause);
  },
  //*******************************************************
  //c_click, click on an element
  //*******************************************************
  c_click: function (selector) {
    return this.waitForElementVisible(
      {
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      },
      5000
    )
      .moveToElement(selector, 10, 10)
      .setValue(selector, "")
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
  },
  //*******************************************************
  //c_click, click on an element
  //*******************************************************
  c_moveToElement: function (selector, x, y) {
    return this.waitForElementVisible(
      {
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      },
      5000
    )
      .moveToElement(selector, x, y)
      .pause(currentPause);
  },
  //*******************************************************
  //c_setValue, set value of an element
  //*******************************************************
  c_setValue: function (selector, val) {
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .setValue(selector, val);
  },
  //*******************************************************
  //c_selectFacet, select random facet from field  or take the nr requested
  //*******************************************************
  c_selectFacet: function (field, nr = "RND", max = 5) {
    if (nr == "RND") {
      nr = this.getRandomInt(1, max);
    }
    let selector =
      '.CoveoFacet[data-field="' + field + '"] > ul > li:nth-child(' + nr + ")";
    currentFacet = selector;
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
  },
  //*******************************************************
  //c_selectDynamicFacet, select random facet from field or take the nr requested
  //*******************************************************
  c_selectDynamicFacet: function (field, nr = "RND", max = 5) {
    if (nr == "RND") {
      nr = this.getRandomInt(1, max);
    }
    let selector =
      '.CoveoDynamicFacet[data-field="' +
      field +
      '"] > ul > li:nth-child(' +
      nr +
      ")";
    currentFacet = selector;
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
  },
  //*******************************************************
  //c_deselectFacet, deselect the facet value, earlier selected with selectFacet/selectDynamicFacet
  //*******************************************************
  c_deselectFacet: function () {
    //Deselects the previous (random facet selected)
    let selector = currentFacet;
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
  },
  //*******************************************************
  //c_selectFacetValue, select facet with specific value
  //*******************************************************
  c_selectFacetValue: function (value) {
    let selector = 'li[data-value="' + value + '"]';
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
  },
  //*******************************************************
  //c_deSelectFacetValue, deselect facet with specific value
  //*******************************************************
  c_deSelectFacetValue: function (value) {
    let selector = 'li[data-value="' + value + '"]';
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
  },
  //*******************************************************
  //c_clickResult, click on result nr (RND or number) with resultlist id. Choose between 1 and max of occurences for RND
  //*******************************************************
  c_clickResult: function (
    nr = "RND",
    resultlist = "",
    max = 5,
    specific = ""
  ) {
    let selector = "";
    if (resultlist != "") {
      selector = resultlist + " ";
    }
    if (nr == "RND") {
      max = this.getMaxResults(selector);
      nr = this.getRandomInt(1, max);
    }
    selector +=
      ".CoveoResultList > div > div:nth-child(" + nr + ") .CoveoResultLink";
    if (specific != "") {
      selector = specific;
    }
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
  },
  //*******************************************************
  //c_clickRecommendation, click on recommendation nr (RND or number) with resultlist id. Choose between 1 and max of occurences for RND
  //*******************************************************
  c_clickRecommendation: function (
    nr = "RND",
    resultlist = "",
    max = 3,
    specific = ""
  ) {
    let selector = "";
    if (resultlist != "") {
      selector = resultlist + " ";
    }
    if (nr == "RND") {
      max = this.getMaxResults(selector);
      nr = this.getRandomInt(1, max);
    }
    selector +=
      ".CoveoResultList > div > div:nth-child(" + nr + ")  .CoveoResultLink";
    if (specific != "") {
      selector = specific;
    }
    return this.waitForElementVisible({
      selector: selector,
      abortOnFailure: false,
      timeout: 5000,
    })
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
  },
  //*******************************************************
  //c_clickQuickview, click on quickview nr (RND or number) with resultlist id. Choose between 1 and max of occurences for RND
  // if autoclose is set, quickview will close automatically
  //*******************************************************
  c_clickQuickview: function (
    nr = "RND",
    resultlist = "",
    max = 5,
    autoclose = true
  ) {
    let selector = "";
    if (resultlist != "") {
      selector = resultlist + " ";
    }
    if (nr == "RND") {
      max = this.getMaxResults(selector);
      nr = this.getRandomInt(1, max);
    }
    selector +=
      ".CoveoResultList > div > div:nth-child(" + nr + ")  .CoveoQuickview";
    this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })
      .pause(currentPause);
    if (autoclose) this.c_closeQuickview();
  },
  //*******************************************************
  //c_closeQuickview, close the quickview window
  //*******************************************************
  c_closeQuickview: function () {
    let selector =
      "div.coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > div > header > span";
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })

      .pause(currentPause);
  },
  //*******************************************************
  //c_selectTab, tab to select (using the caption)
  //*******************************************************
  c_selectTab: function (caption) {
    let selector = '.CoveoTab[data-caption="' + caption + '"]';
    return this.waitForElementVisible(selector, 5000)
      .moveToElement(selector, 10, 10)
      .pause(200)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      })

      .pause(currentPause);
  },
  //*******************************************************
  //c_loginOffice
  //*******************************************************
  c_loginOffice: function (user, pass) {
    this.c_click("#loginWithOffice365")
      .c_setValue("#i0116", user)
      .c_click("#idSIButton9")
      .c_setValue("#i0118", pass)
      .c_click("#idSIButton9")
      .c_click("#idBtn_Back");
  },
  c_waitForElement: function (selector, tries = 1, callback) {
    let _this = this;
    console.log("CHECK FOR ELEMENT " + selector + " (" + tries + ")");
    this.waitForElementVisible(selector, 4000, false, function (result) {
      if (result.value && result.value == true) {
        console.log("Element is there... " + selector);
        callback(true);
      } else {
        console.log("Element is NOT there... , retry " + selector);
        tries += 1;
        if (tries < 3) {
          _this.pause(200);
          _this.moveToElement(selector, 10, 10);
          _this.c_waitForElement(selector, tries, callback);
        } else {
          console.log("Element is NOT there... sending FALSE " + selector);
          callback(false);
        }
      }
    });
  },
  c_clickv2: function (selector, callback) {
    let _this = this;
    this.c_waitForElement(selector, 1, function (result) {
      console.log(result);
      if (result) {
        console.log("Click on Element " + selector);
        _this.click({
          selector: selector,
          abortOnFailure: false,
          suppressNotFoundErrors: true,
        });
        callback(true);
      } else {
        console.log("NO Click because element was not found " + selector);
        callback(false);
      }
    });
  },
  c_setValuev2: function (selector, val, callback) {
    let _this = this;
    this.c_waitForElement(selector, 1, function (result) {
      if (result) {
        _this.setValue(selector, val);
        callback(true);
      } else {
        callback(false);
      }
    });
  },
  //*******************************************************
  //c_loginOfficev2
  //*******************************************************
  c_loginOfficev2: function (user, pass) {
    this.c_clickv2("#loginWithOffice365", () =>
      this.c_setValuev2("#i0116", user, () =>
        this.c_clickv2("#idSIButton9", () =>
          this.c_setValuev2("#i0118", pass, () =>
            this.c_clickv2("#idSIButton9", () =>
              this.c_clickv2("#idBtn_Back", () => {})
            )
          )
        )
      )
    );
  },
};

module.exports = {
  commands: [coveoCommands],
  elements: {
    searchbox: {
      selector: "div.magic-box-input > input[type=text]",
    },
    submit: {
      selector: ".CoveoSearchButton",
    },
  },
};
