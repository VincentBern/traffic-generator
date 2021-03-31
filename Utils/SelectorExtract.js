const GenericStoreSelectors = require("../input/selectors/GenericStore.json");
const JSUISelectors = require("../input/selectors/JSUI.json");
const cssToXpath = require('./cssToXpath');

// const SelectorNames = Object.freeze(
//   {
//     resultList: "resultListSelector",
//     resultCard: "resultCardSelector",
//     resultTitle: "resultTitleSelector",
//     resultLink: "resultLinkSelector",
//     paginationNext: "paginationNextSelector",
//     facet: "facetSelector",
//     facetValue: "facetValueSelector",
//     facetMoreButton: "facetMoreButtonSelector",
//     searchBoxInput: "searchBoxInputSelector",
//     searchBoxClearButton: "searchBoxClearButtonSelector"
//   });

module.exports = function SelectorExtract(
  SelectorObject,
  facetName = 'category'
) {

  const _and = ", ";

  // RESULT SELECTORS
  const resultListSelector = {
    custom: SelectorObject?.searchPage || "",
    genericStore: GenericStoreSelectors.searchPage || "",
    jsui: JSUISelectors.searchPage || ""
  }
  const resultCardSelector = {
    custom: SelectorObject?.result?.resultCard || "",
    genericStore: GenericStoreSelectors.result.resultCard || "",
    jsui: JSUISelectors.result?.resultCard || ""
  }
  const resultTitleSelector = {
    custom: SelectorObject?.result?.resultTitle || "",
    genericStore: GenericStoreSelectors.result.resultTitle || "",
    jsui: JSUISelectors.result.resultTitle || ""
  }
  const resultLinkSelector = {
    custom: SelectorObject?.result?.resultLink || "",
    genericStore: GenericStoreSelectors.result.resultLink || "",
    jsui: JSUISelectors.result.resultLink || ""
  }

  // PAGINATION SELECTORS
  const paginationNextSelector = {
    custom: SelectorObject?.pagination?.next || "",
    genericStore: GenericStoreSelectors.pagination.next || "",
    jsui: JSUISelectors.pagination.next || ""
  }

  // FACET SELECTORS
  const facetSelector = {
    custom: SelectorObject?.facets && SelectorObject.facets[facetName] || "",
    genericStore: GenericStoreSelectors.facets[facetName] || "",
    jsui: JSUISelectors.facets[facetName] || ""
  }
  const facetValueSelector = {
    custom: SelectorObject?.facets?.facetValue || "",
    genericStore: GenericStoreSelectors.facets.facetValue || "",
    jsui: JSUISelectors.facets.facetValue || ""
  }
  const facetMoreButtonSelector = {
    custom: SelectorObject?.facets?.showMore || "",
    genericStore: GenericStoreSelectors.facets.showMore || "",
    jsui: JSUISelectors.facets.showMore || ""
  }

  // SEARCH BOX
  const searchBoxInputSelector = {
    custom: SelectorObject?.searchBox?.input || "",
    genericStore: GenericStoreSelectors.searchBox.input || "",
    jsui: JSUISelectors.searchBox.inpu || ""
  }
  const searchBoxClearButtonSelector = {
    custom: SelectorObject?.searchBox?.clearButton.button || "",
    genericStore: GenericStoreSelectors.searchBox.clearButton.button || "",
    jsui: JSUISelectors.searchBox.clearButton.button || ""
  }

  const SelectorsMenu = {
    resultListSelector,
    resultCardSelector,
    resultTitleSelector,
    resultLinkSelector,
    paginationNextSelector,
    facetSelector,
    facetValueSelector,
    facetMoreButtonSelector,
    searchBoxInputSelector,
    searchBoxClearButtonSelector
  }

  function getSelectors(use = 'css') {
    let selectors = {};

    Object.keys(SelectorsMenu).forEach(selectorKey => {
      const custom = SelectorsMenu[selectorKey].custom;
      const genericStore = SelectorsMenu[selectorKey].genericStore;
      const jsui = SelectorsMenu[selectorKey].jsui;

      let classTemp = ''
      if (custom) {
        classTemp = custom;
      }
      else if (genericStore && jsui) {
        classTemp = genericStore + _and + jsui
      }
      else if (!genericStore && jsui) {
        classTemp = jsui
      }
      else {
        classTemp = genericStore
      }

      if (use === 'xpath') {
        selectors[selectorKey] = cssToXpath(classTemp)
        return;
      }

      selectors[selectorKey] = classTemp;
    });

    return selectors;
  }

  function coupleClassGroups(classGroupA, classGroupB, withText) {

    const a_split = classGroupA.split(',');
    const b_split = classGroupB.split(',');

    let parsed = [];

    a_split.forEach(group_a => {
      b_split.forEach(group_b => {
        if (withText !== "") {
          let selectorTemp = cssToXpath(group_a + " " + group_b);
          selectorTemp += withText;
          parsed.push(selectorTemp);
        }
        else {
          parsed.push(group_a + " " + group_b);
        }
      })
    });

    if (withText !== "") {
      return parsed.join(' | ');
    }
    else {
      return parsed.join(',');
    }
  }

  function getParentChildSelector(classA, classB, use = "css", withText = "") {

    let classTemp = '';
    if (SelectorObject) {
      classTemp = coupleClassGroups(SelectorsMenu[classA].custom, SelectorsMenu[classB].custom, withText);
    }
    else {
      classTemp =
        coupleClassGroups(SelectorsMenu[classA].genericStore, SelectorsMenu[classB].genericStore, withText);

      if (withText !== "") {
        classTemp = classTemp + " | ";
      } else {
        classTemp = classTemp + _and
      }

      classTemp = classTemp + coupleClassGroups(SelectorsMenu[classA].jsui, SelectorsMenu[classB].jsui, withText);
    }

    if (use === "xpath" && withText === "") {
      return cssToXpath(classTemp);
    }

    return classTemp;
  }

  return {
    getParentChildSelector,
    getSelectors,
    // getJSUISelectors: this.SelectorsMenu,
    // getCustomSelectors: "",
    // getGenericStoreSeletors: "",
  };
}