const GenericStoreSelectors = require("../input/selectors/GenericStore.json");
const JSUISelectors = require("../input/selectors/JSUI.json");

module.exports = function SelectorExtract(
  SelectorObject,
  facetName = 'category') {
  const _and = ", ";
  const { GenericStoreSelectors, JSUISelectors } = SelectorObject;

  // RESULT SELECTORS
  const resultListSelector = SelectorObject.searchPage || GenericStoreSelectors?.searchPage + _and + JSUISelectors?.searchPage;
  const resultCardSelector = SelectorObject.result.resultCard || GenericStoreSelectors?.result.resultCard + _and + JSUISelectors.result?.resultCard;
  const resultTitleSelector = SelectorObject.result.resultTitle || GenericStoreSelectors.result.resultTitle + _and + JSUISelectors.result.resultTitle;
  const resultLinkSelector = SelectorObject.result.resultLink || GenericStoreSelectors.result.resultLink + _and + JSUISelectors.result.resultLink;

  // PAGINATION SELECTORS
  const paginationNextSelector = SelectorObject.pagination.next || GenericStoreSelectors.pagination.next + _and + JSUISelectors.pagination.next;

  // FACET SELECTORS
  const facetSelector = SelectorObject.facets[facetName] || GenericStoreSelectors.facets[facetName] + _and + JSUISelectors.facets[facetName];
  const facetValueSelector = SelectorObject.facets.facetValue || GenericStoreSelectors.facets.facetValue + _and + JSUISelectors.facets.facetValue;
  const facetMoreButtonSelector = SelectorObject.facets.showMore || GenericStoreSelectors.facets.showMore + _and + JSUISelectors.facets.showMore;

  // SEARCH BOX
  const searchBoxInputSelector = SelectorObject.searchBox.input || GenericStoreSelectors.searchBox.input + _and + JSUISelectors.searchBox.input
  const searchBoxClearButtonSelector = SelectorObject.searchBox.clearButton.button || GenericStoreSelectors.searchBox.clearButton.button + _and + JSUISelectors.searchBox.clearButton.button

  return {
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
  };
}