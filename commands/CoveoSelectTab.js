const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Clicks on an element using xpath
 * @param  {[string]} tabName text that appears in the tab (title)
 * @param  {[string]} Selector String to search product by
 * @return {[Promise]} true if click on the Tab was successful, false if it wasn't
 */


module.exports = class CoveoSelectTab {
  async command(tabName, Selectors) {

    const tabSelector = SelectorExtract(Selectors).getSelector('tabSelector', 'xpath');
    const tabSelectorWithText = tabSelector + "[contains(.,'" + tabName + "')]";
    return this.api.CoveoClick(tabSelectorWithText);
  }
};
