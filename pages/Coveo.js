let prevRND = 1;
let currentPause = 500;
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
    this.api.elements("css selector", selector, (labels) => {
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
    return this.api.execute(
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
    const selector = specific || ".CoveoSearchbox .magic-box-input > input";
    const inputBoxSelector = `${searchinterface} ${selector}`;
    let _this = this;
    return new Promise((resolve) => {
      this.c_waitForElement(inputBoxSelector).then(function (result) {
        if (result) {
          _this.clearValue(inputBoxSelector, (result) => {
            if (result.status == -1) {
              _this.pause(currentPause);
              resolve(false);
            }
            _this.setValue(inputBoxSelector, text, (result) => {
              if (result.status != -1) {
                _this.pause(currentPause);
                resolve(true);
              } else {
                resolve(false);
              }
            });
          });
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_searchAndSubmit, search for text and click on submit
  //*******************************************************
  c_searchAndSubmit: function (text, searchinterface = "", specific = "") {
    let _this = this;
    return new Promise((resolve) => {
      this.c_search(text, searchinterface, specific).then(function (result) {
        if (result) {
          _this
            .c_click(`${searchinterface} .CoveoSearchButton`)
            .then(function (result) {
              if (result.status != -1) {
                _this.pause(currentPause);
                resolve(true);
              } else {
                resolve(false);
              }
            });
        } else {
          resolve(false);
        }
      });
    });
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

    let _this = this;
    return new Promise((resolve) => {
      this.c_waitForElement(searchinterface + selector).then(function (result) {
        if (result) {
          _this.clearValue(searchinterface + selector, (result) => {
            if (result.status == -1) {
              resolve(false);
            }
            _this.setValue(searchinterface + selector, text, (result) => {
              if (result.status != -1) {
                _this.c_click(selectorSuggestion).then(function (result) {
                  if (result.status != -1) {
                    console.log("Suggestion is clicked");
                    _this.pause(currentPause);
                    resolve(true);
                  } else {
                    console.log("Suggestion is NOT clicked");
                    resolve(false);
                  }
                });
              } else {
                resolve(false);
              }
            });
          });
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_click, click on an element
  //*******************************************************
  c_clickv1: function (selector) {
    return this.waitForElementVisible(
      {
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      },
      5000
    )
      .moveToElement(selector, 10, 10)
      .click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      });
  },
  //*******************************************************
  //c_click, click on an element
  //*******************************************************
  c_moveToElement: function (selector, x, y) {
    let _this = this;
    return new Promise((resolve) => {
      this.c_waitForElement(selector).then(function (result) {
        if (result) {
          _this.moveToElement(selector, x, y, (result) => {
            if (result.status != -1) {
              _this.pause(currentPause);
              resolve(true);
            } else {
              resolve(false);
            }
          });
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_setValue, set value of an element
  //*******************************************************
  c_setValuev1: function (selector, val) {
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
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
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
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_deselectFacet, deselect the facet value, earlier selected with selectFacet/selectDynamicFacet
  //*******************************************************
  c_deselectFacet: function () {
    //Deselects the previous (random facet selected)
    let selector = currentFacet;
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_selectFacetValue, select facet with specific value
  //*******************************************************
  c_selectFacetValue: function (value) {
    let selector = 'li[data-value="' + value + '"]';
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_deSelectFacetValue, deselect facet with specific value
  //*******************************************************
  c_deSelectFacetValue: function (value) {
    let selector = 'li[data-value="' + value + '"]';
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
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
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
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
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
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
    let _this = this;
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          if (autoclose) {
            _this.c_closeQuickview().then(function (result) {
              if (result) {
                _this.pause(currentPause);
                resolve(true);
              } else {
                resolve(false);
              }
            });
          } else {
            resolve(true);
          }
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_closeQuickview, close the quickview window
  //*******************************************************
  c_closeQuickview: function () {
    let selector =
      "div.coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > div > header > span";
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_selectTab, tab to select (using the caption)
  //*******************************************************
  c_selectTab: function (caption) {
    let selector = '.CoveoTab[data-caption="' + caption + '"]';
    return new Promise((resolve) => {
      this.c_click(selector).then(function (result) {
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_loginOffice
  //*******************************************************
  c_loginOfficev1: function (user, pass) {
    return this.c_click("#loginWithOffice365")
      .c_setValue("#i0116", user)
      .c_click("#idSIButton9")
      .c_setValue("#i0118", pass)
      .c_click("#idSIButton9")
      .c_click("#idBtn_Back");
  },
  c_waitForElement: function (selector, using = "css selector") {
    let _this = this;
    return new Promise((resolve) => {
      //First try isVisible
      console.log(using);
      this.isVisible(using, selector, (result) => {
        //If visible
        if (result.status != -1) {
          _this.pause(currentPause);
          resolve(true);
          return;
        }
        //Not visible, wait, and move to the element
        _this.pause(1000);
        _this.moveToElement(using, selector, 10, 10, (result) => {
          if (result.status != -1) {
            _this.isVisible(using, selector, (result) => {
              //If visible
              if (result.status != -1) {
                _this.pause(currentPause);
                resolve(true);
                return;
              } else {
                resolve(false);
                return;
              }
            });
          } else {
            resolve(false);
            return;
          }
        });
      });
    });
  },
  c_click: function (selector) {
    let _this = this;
    return new Promise((resolve) => {
      this.c_waitForElement(selector).then(function (result) {
        console.log(result);
        if (result) {
          console.log("Click on Element " + selector);
          _this.click(
            {
              selector: selector,
              abortOnFailure: false,
              suppressNotFoundErrors: true,
            },
            (result) => {
              if (result.status != -1) {
                console.log("CLICKED ON " + selector);
                _this.pause(currentPause);
                resolve(true);
              } else {
                console.log(
                  "NO Click because element was not found (step 2) " + selector
                );
                resolve(false);
              }
            }
          );
        } else {
          console.log(
            "NO Click because element was not found (step 1) " + selector
          );
          resolve(false);
        }
      });
    });
  },
  c_setValue: function (selector, val, callback) {
    let _this = this;
    return new Promise((resolve) => {
      this.c_waitForElement(selector).then(function (result) {
        if (result) {
          _this.setValue(selector, val, (result) => {
            if (result.status != -1) {
              _this.pause(currentPause);
              resolve(true);
            } else {
              resolve(false);
            }
          });
        } else {
          resolve(false);
        }
      });
    });
  },
  //*******************************************************
  //c_loginOfficev2
  //*******************************************************
  c_loginOffice: async function (user, pass) {
    let res = true;
    if (res) res = await this.c_click("#loginWithOffice365");
    if (res) res = await this.c_setValue("#i0116", user);
    if (res) res = await this.c_click("#idSIButton9");
    if (res) res = await this.c_setValue("#i0118", pass);
    if (res) res = await this.c_click("#idSIButton9");
    if (res) res = await this.c_click("#idBtn_Back");
    return res;
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
