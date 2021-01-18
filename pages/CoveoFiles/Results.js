const coveoResultsCommands = {

  //*******************************************************
  //c_clickRecommendation, click on recommendation nr (RND or number) with resultlist id. Choose between 1 and max of occurences for RND
  //*******************************************************
  c_clickRecommendation: async function (
    nr = "RND",
    resultlist = "",
    max = 3,
    specific = ""
  ) {
    let _this = this;
    let selector = "";
    if (resultlist != "") {
      selector = resultlist + " ";
    }
    if (nr == "RND") {
      max = await this.api.page.CoveoFiles.Generic().getMaxResults(selector);
      nr = this.api.page.CoveoFiles.Generic().getRandomInt(1, max);
    }
    selector +=
      ".CoveoResultList > div > div:nth-child(" + nr + ")  .CoveoResultLink";
    selector = selector.trim();
    if (specific != "") {
      selector = specific;
    }
    return new Promise((resolve) => {
      this.api.page.CoveoFiles.Generic()
        .c_click(selector)
        .then(function (result) {
          if (result) {
            _this.api.page.CoveoFiles.Generic().c_Pause();
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
  c_clickQuickview: async function (
    nr = "RND",
    resultlist = "",
    max = 5,
    autoclose = true,
    child = -1
  ) {
    let selector = "";
    if (resultlist != "") {
      selector = resultlist + " ";
    }
    if (nr == "RND") {
      max = await this.api.page.CoveoFiles.Generic().getMaxResults(selector);
      console.log(max);
      nr = this.api.page.CoveoFiles.Generic().getRandomInt(1, max);
    }
    selector +=
      ".CoveoResultList > div > div:nth-child(" +
      nr +
      ")  .CoveoQuickview.coveo-accessible-button";
    if (child != -1) {
      selector += `:nth-child(${child})`;
    }
    selector = selector.trim();
    let _this = this;
    return new Promise((resolve) => {
      this.api.page.CoveoFiles.Generic()
        .c_click(selector)
        .then(function (result) {
          if (result) {
            if (autoclose) {
              _this.c_closeQuickview().then(function (result) {
                if (result) {
                  _this.api.page.CoveoFiles.Generic().c_Pause();
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
    let _this = this;
    let selector =
      "div.coveo-modal-container.coveo-opened.coveo-mod-big.coveo-quick-view.coveo-mod-fade-in-scale > div > header > span";
    return new Promise((resolve) => {
      this.api.page.CoveoFiles.Generic()
        .c_click(selector)
        .then(function (result) {
          if (result) {
            _this.api.page.CoveoFiles.Generic().c_Pause();
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  },
};

module.exports = {
  commands: [coveoResultsCommands],
};
