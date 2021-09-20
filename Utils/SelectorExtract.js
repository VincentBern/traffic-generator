const GenericStoreSelectors = require("../input/selectors/GenericStore.json");
const JSUISelectors = require("../input/selectors/JSUI.json");
const cssToXpath = require('./cssToXpath');

module.exports = function SelectorExtract(
  CustomSelector,
  options = {
    facetName: 'category'
  }
) {

  // RESULT SELECTORS
  const resultListSelector = {
    custom: CustomSelector?.result?.resultList || "",
    genericStore: GenericStoreSelectors.result.resultList || "",
    jsui: JSUISelectors.result.resultList || ""
  };
  const resultCardSelector = {
    custom: CustomSelector?.result?.resultCard || "",
    genericStore: GenericStoreSelectors.result.resultCard || "",
    jsui: JSUISelectors.result?.resultCard || ""
  };
  const resultTitleSelector = {
    custom: CustomSelector?.result?.resultTitle || "",
    genericStore: GenericStoreSelectors.result.resultTitle || "",
    jsui: JSUISelectors.result.resultTitle || ""
  };
  const resultLinkSelector = {
    custom: CustomSelector?.result?.resultLink || "",
    genericStore: GenericStoreSelectors.result.resultLink || "",
    jsui: JSUISelectors.result.resultLink || ""
  };

  // PAGINATION SELECTORS
  const paginationNextSelector = {
    custom: CustomSelector?.pagination?.next || "",
    genericStore: GenericStoreSelectors.pagination.next || "",
    jsui: JSUISelectors.pagination.next || ""
  };

  // FACET SELECTORS
  const facetSelector = {
    custom: CustomSelector?.facets && CustomSelector.facets[options?.facetName] || "",
    genericStore: GenericStoreSelectors.facets[options?.facetName] || "",
    jsui: JSUISelectors.facets[options?.facetName] || ""
  };
  const facetValueSelector = {
    custom: CustomSelector?.facets?.facetValue || "",
    genericStore: GenericStoreSelectors.facets.facetValue || "",
    jsui: JSUISelectors.facets.facetValue || ""
  };
  const facetMoreButtonSelector = {
    custom: CustomSelector?.facets?.showMore || "",
    genericStore: GenericStoreSelectors.facets.showMore || "",
    jsui: JSUISelectors.facets.showMore || ""
  };

  // SEARCH BOX
  const searchBoxInputSelector = {
    custom: CustomSelector?.searchBox?.input || "",
    genericStore: GenericStoreSelectors.searchBox.input || "",
    jsui: JSUISelectors.searchBox.input || ""
  };
  const searchBoxClearButtonSelector = {
    custom: CustomSelector?.searchBox?.clearButton.button || "",
    genericStore: GenericStoreSelectors.searchBox.clearButton.button || "",
    jsui: JSUISelectors.searchBox.clearButton.button || ""
  };

  // TAB SELECTORS
  const tabSelector = {
    custom: CustomSelector?.tab || "",
    genericStore: GenericStoreSelectors.tab || "",
    jsui: JSUISelectors.tab || ""
  };

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
    searchBoxClearButtonSelector,
    tabSelector
  };

  function getSelector(selectorName, use = 'css') {

    const custom = SelectorsMenu[selectorName]?.custom;
    const genericStore = SelectorsMenu[selectorName]?.genericStore;
    const jsui = SelectorsMenu[selectorName]?.jsui;

    let classTemp = '';
    if (CustomSelector) {
      classTemp = custom;
    }
    else if (genericStore && jsui) {
      classTemp = genericStore + ", " + jsui;
    }
    else if (!genericStore && jsui) {
      classTemp = jsui;
    }
    else {
      classTemp = genericStore;
    }

    return use === 'xpath' ? cssToXpath(classTemp) : classTemp;
  }

  // Takes in two selector groups (parent, child), and a text component (if targeting by text with xpath)
  function parseParentChildSelectors(SelectorsGroupA, SelectorsGroupB, withText) {

    const a_split = SelectorsGroupA.split(',');
    const b_split = SelectorsGroupB.split(',');

    let parsed = [];

    a_split.forEach(group_a => {
      b_split.forEach(group_b => {
        if (!!withText) {
          let selectorTemp = cssToXpath((group_a + " " + group_b).trim());
          selectorTemp += withText;
          parsed.push(selectorTemp);
        }
        else {
          parsed.push((group_a + " " + group_b).trim());
        }
      });
    });
    return parsed.join(!!withText ? ' | ' : ', ');
  }

  /** This function takes two groups of classes (parent and child for each selector group, 
   * JSUI and GENERIC STORE) and builds the selector parent-child with the appropriate reltionships
   * for all possible combinations. 
   * 
   * For example, we want the selector for ResultList > ResultLink for both JSUI and GenStore
   * 
   * ResultLink for JSUI:             ".resultLink, .CoveoResultLink"
   * ResultLink for Generic Store:    ".result-link, .coveo-result-link",
   * Resultlist for JSUI:             ".result-list, .CoveoResultList"
   * Resultlist Generic Store:        '.result-list-container'
   * 
   * if we assume that selectorResultList = GenericStore_ResultList + ", " + JSUI_ResultList
   * AND
   * selectorResultLink= GenericStore_ResultLink + ", " + JSUI_ResultLink
   * 
   * THEN
   * we do the following: document.querySelector(${selectorResultList} ${selectorResultLink}})
   * We would end up with:
   * .result-list, .CoveoResultList, .result-list-container .resultLink, .CoveoResultLink, 
   * .result-link, .coveo-result-link
   * 
   * Definitely not what we want, as we would up with non-sensical selectors that
   * would target .result-list alone and a combination of other selectors.
   * 
   * We want a combination of all possible scenarios for each selector group inside a single selector
   * split by Selector group (JSUI first, and then Generic Store):
   * .result-list .resultLink, .result-list .CoveoResultLink, .CoveoResultList .resultLink, .CoveoResultList .CoveoResultLink,
   * .result-list-container .result-list-container
  */
  function getParentChildSelector(parentSelectorName, childSelectorName, use = "css", withText = "") {

    let classTemp = '';
    // If we're using a custom Selector group
    if (CustomSelector) {
      classTemp = parseParentChildSelectors(
        SelectorsMenu[parentSelectorName].custom,
        SelectorsMenu[childSelectorName].custom,
        withText).trim();
    }
    else {
      // Otherwise return GenericStore + ", " + JSUI Selectors
      classTemp =
        parseParentChildSelectors(
          SelectorsMenu[parentSelectorName].genericStore,
          SelectorsMenu[childSelectorName].genericStore,
          withText).trim();

      // need to use " | " because coupleClassGroups and withText would changed the selector to xpath
      classTemp = !!withText ? classTemp + " | " : classTemp + ", ";

      classTemp = classTemp + parseParentChildSelectors(
        SelectorsMenu[parentSelectorName].jsui,
        SelectorsMenu[childSelectorName].jsui,
        withText).trim();
    }

    if (use === "xpath" && !withText) {
      // Only conver to expath when withText isn't set, as parseParentChildSelectors()
      // will convert to xpath when a value fot withText is passed
      return cssToXpath(classTemp.trim());
    }

    return classTemp;
  }

  return {
    getParentChildSelector,
    getSelector
  };
};
