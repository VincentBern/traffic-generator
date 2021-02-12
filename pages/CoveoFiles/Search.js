const coveoSearchCommands = {
  //*******************************************************
  //c_search, search for text. Do not click on submit
  //*******************************************************
  c_search: function (text, searchinterface = "", specific = "") {
    const selector = specific || ".CoveoSearchbox .magic-box-input > input, #search-box";

    const inputBoxSelector = `${searchinterface} ${selector}`;
    let _this = this;
    return new Promise((resolve) => {
      this.api.page.CoveoFiles.Generic()
        .c_waitForElement(inputBoxSelector)
        .then(function (result) {
          if (result) {
            console.log('clearValue');
            _this.clearValue(inputBoxSelector, (result) => {
              if (result.status == -1) {
                _this.api.page.CoveoFiles.Generic().c_Pause();
                resolve(false);
              }
              console.log('setValue');
              _this.setValue(inputBoxSelector, '');
              _this.setValue(inputBoxSelector, text, (result) => {
                if (result.status != -1) {
                  _this.api.page.CoveoFiles.Generic().c_Pause();
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
          _this.api.page.CoveoFiles.Generic()
            .c_click(`${searchinterface} .CoveoSearchButton`)
            .then(function (result) {
              if (result) {
                _this.api.page.CoveoFiles.Generic().c_Pause();
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
    selector = selector.trim();
    let selectorSuggestion = "#magic-box-suggestion-" + nr + "";
    if (specificSuggestion != "") {
      selectorSuggestion = specificSuggestion;
    }

    let _this = this;
    return new Promise((resolve) => {
      this.api.page.CoveoFiles.Generic()
        .c_waitForElement(searchinterface + selector)
        .then(function (result) {
          if (result) {
            _this.clearValue(searchinterface + selector, (result) => {
              if (result.status == -1) {
                resolve(false);
              }
              _this.setValue(searchinterface + selector, text, (result) => {
                if (result.status != -1) {
                  _this.api.page.CoveoFiles.Generic()
                    .c_click(selectorSuggestion)
                    .then(function (result) {
                      if (result) {
                        console.log("Suggestion is clicked");
                        _this.api.page.CoveoFiles.Generic().c_Pause();
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
};

module.exports = {
  commands: [coveoSearchCommands],
};
