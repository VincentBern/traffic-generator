module.exports = class CoveoSearch {
  async command(
    text,
    suggestions = 0, // supports number for position, or text for CSS selector.
    searchinterface = "",
    selector = ".CoveoSearchbox .magic-box-input > input",
  ) {

    const inputBoxSelector = `${searchinterface} ${selector}`;

    let result = await this.api.waitForElementVisible(inputBoxSelector);
    let lastSearchUid = await this.api.getLastResponse().searchUid;

    result = await this.api.clearValue(inputBoxSelector);
    result = await this.api.setValue(inputBoxSelector, text);

    let suggestionSelector = null;
    if (typeof suggestions === 'number') {
      suggestionSelector = `.magic-box-suggestion.coveo-omnibox-selectable:nth-child(${suggestions})`;
    }

    // await this.api.invalidateSearchResults();
    if (suggestionSelector) {
      result = await this.api.waitForElementVisible(suggestionSelector);
      result = await this.api.click(suggestionSelector);
    }
    result = this.api.CoveoWaitForSearch(lastSearchUid);
    // result = await this.api.waitForElementNotPresent('.CoveoResult.nightwatch-invalidated-result');
    // result = await this.api.waitForElementVisible('.CoveoResult');

    return result;
  }
};
