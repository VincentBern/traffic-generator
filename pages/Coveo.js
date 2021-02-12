const coveoCommands = {
  //*******************************************************
  //setPause, to set timing between events
  //*******************************************************
  setPause: function (nr) {
    return this.api.page.CoveoFiles.Generic().c_setPause(nr);
  },
  //*******************************************************
  //c_makeVisible, make elements visible
  //*******************************************************
  makeVisible: function (selector) {
    return this.api.page.CoveoFiles.Generic().c_makeVisible(selector);
  },
  //*******************************************************
  //search, search for text. Do not click on submit
  //*******************************************************
  search: function (text, searchinterface = "", specific = "") {
    return this.api.page.CoveoFiles.Search().c_search(
      text,
      searchinterface,
      specific
    );
  },
  //*******************************************************
  //c_searchAndSubmit, search for text and click on submit
  //*******************************************************
  searchAndSubmit: function (text, searchinterface = "", specific = "") {
    return this.api.page.CoveoFiles.Search().c_searchAndSubmit(
      text,
      searchinterface,
      specific
    );
  },
  //*******************************************************
  //c_searchAndClickSuggestion, search for text and click on NR suggestion
  //*******************************************************
  searchAndClickSuggestion: function (
    text,
    searchinterface = "",
    nr = 0,
    specific = "",
    specificSuggestion = ""
  ) {
    return this.api.page.CoveoFiles.Search().c_searchAndClickSuggestion(
      text,
      searchinterface,
      nr,
      specific,
      specificSuggestion
    );
  },
  //*******************************************************
  //c_moveToElement, click on an element
  //*******************************************************
  c_moveToElement: function (selector, x, y) {
    return this.api.page.CoveoFiles.Generic().c_moveToElement(selector, x, y);
  },
  //*******************************************************
  //selectFacet, select random facet from field  or take the nr requested
  //*******************************************************
  selectFacet: function (field, nr = "RND", max = 5) {
    return this.api.page.CoveoFiles.Facets().c_selectFacet(field, nr, max);
  },
  //*******************************************************
  //selectDynamicFacet, select random facet from field or take the nr requested
  //*******************************************************
  selectDynamicFacet: function (field, nr = "RND", max = 5) {
    return this.api.page.CoveoFiles.Facets().c_selectDynamicFacet(
      field,
      nr,
      max
    );
  },
  //*******************************************************
  //c_deselectFacet, deselect the facet value, earlier selected with selectFacet/selectDynamicFacet
  //*******************************************************
  deselectFacet: function () {
    return this.api.page.CoveoFiles.Facets().c_deselectFacet();
  },
  //*******************************************************
  //selectFacetValue, select facet with specific value
  //*******************************************************
  selectFacetValue: function (value) {
    return this.api.page.CoveoFiles.Facets().c_selectFacetValue(value);
  },
  //*******************************************************
  //deSelectFacetValue, deselect facet with specific value
  //*******************************************************
  deSelectFacetValue: function (value) {
    return this.api.page.CoveoFiles.Facets().c_deSelectFacetValue(value);
  },
  //*******************************************************
  //clickResult, click on result nr (RND or number) with resultlist id. Choose between 1 and max of occurences for RND
  //*******************************************************
  clickResult: function (
    nr = "RND",
    closeWindow = false,
    resultlist = "",
    max = 5,
    specific = ""
  ) {
    return this.api.page.CoveoFiles.Results().c_clickResult(
      nr,
      closeWindow,
      resultlist,
      max,
      specific
    );
  },
  //*******************************************************
  //clickRecommendation, click on recommendation nr (RND or number) with resultlist id. Choose between 1 and max of occurences for RND
  //*******************************************************
  clickRecommendation: function (
    nr = "RND",
    resultlist = "",
    max = 3,
    specific = ""
  ) {
    return this.api.page.CoveoFiles.Results().c_clickRecommendation(
      nr,
      resultlist,
      max,
      specific
    );
  },
  //*******************************************************
  //clickQuickview, click on quickview nr (RND or number) with resultlist id. Choose between 1 and max of occurences for RND
  // if autoclose is set, quickview will close automatically
  //*******************************************************
  clickQuickview: function (
    nr = "RND",
    resultlist = "",
    max = 5,
    autoclose = true,
    child = -1
  ) {
    return this.api.page.CoveoFiles.Results().c_clickQuickview(
      nr,
      resultlist,
      max,
      autoclose,
      child
    );
  },
  //*******************************************************
  //closeQuickview, close the quickview window
  //*******************************************************
  closeQuickview: function () {
    return this.api.page.CoveoFiles.Results().c_closeQuickview();
  },

  c_waitForElement: function (selector, using = "css selector") {
    return this.api.page.CoveoFiles.Generic().c_waitForElement(selector, using);
  },

  c_click: function (selector) {
    return this.api.page.CoveoFiles.Generic().c_click(selector);
  },

  c_setValue: function (selector, val, callback) {
    return this.api.page.CoveoFiles.Generic().c_setValue(
      selector,
      val,
      callback
    );
  },
  //*******************************************************
  //loginOfficev2
  //*******************************************************
  loginOffice: async function (user, pass) {
    return this.api.page.CoveoFiles.Misc().c_loginOffice(user, pass);
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
