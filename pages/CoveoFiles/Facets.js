let currentFacet = "";

const coveoFacetsCommands = {
  //*******************************************************
  //c_selectFacet, select random facet from field  or take the nr requested
  //*******************************************************
  c_selectFacet: function (field, nr = "RND", max = 5) {
    let _this = this;
    if (nr == "RND") {
      nr = this.api.page.CoveoFiles.Generic().getRandomInt(1, max);
    }
    let selector =
      '.CoveoFacet[data-field="' + field + '"] > ul > li:nth-child(' + nr + ")";
    currentFacet = selector;
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
  //c_selectDynamicFacet, select random facet from field or take the nr requested
  //*******************************************************
  c_selectDynamicFacet: function (field, nr = "RND", max = 5) {
    let _this = this;
    if (nr == "RND") {
      nr = this.api.page.CoveoFiles.Generic().getRandomInt(1, max);
    }
    let selector =
      '.CoveoDynamicFacet[data-field="' +
      field +
      '"] > ul > li:nth-child(' +
      nr +
      ")";
    currentFacet = selector;
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
  //c_deselectFacet, deselect the facet value, earlier selected with selectFacet/selectDynamicFacet
  //*******************************************************
  c_deselectFacet: function () {
    //Deselects the previous (random facet selected)
    let _this = this;
    let selector = currentFacet;
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
  //c_selectFacetValue, select facet with specific value
  //*******************************************************
  c_selectFacetValue: function (value) {
    let _this = this;
    let selector = 'li[data-value="' + value + '"]';
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
  //c_deSelectFacetValue, deselect facet with specific value
  //*******************************************************
  c_deSelectFacetValue: function (value) {
    let _this = this;
    let selector = 'li[data-value="' + value + '"]';
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
  commands: [coveoFacetsCommands],
};
