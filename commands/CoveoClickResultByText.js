const { SelectorExtract, escapeSpecialChars } = require('../Utils/Utilities');

/**
 * Clicks on a result item based on provided text
 * @param  {[string]} text String to search product by
 * @param  {[Object]} Selectors Object containing selectors
 * @param  {[Object]} paginationDepth How many pages should be iterated through to find result
 * @param  {[integer]} index In case of multiple results that match, choose based on order index
 * @return {[Promise]} true if click was successful, false if it wasn't
 */

module.exports = class CoveoOpenResultByTitle {

  async command(
    text = '',
    Selectors,
    paginationDepth = 5,
    index = 1
  ) {

    let SelectorResultXpath =
      SelectorExtract(Selectors).getParentChildSelector(
        "resultListSelector",
        "resultTitleSelector",
        "xpath",
        "[contains(.,'" + text + "')]"
      );

    let res = await this.api.CoveoResultVisibleWithPagination(SelectorResultXpath, paginationDepth, Selectors);

    if (res) {
      // Scroll element into view
      await this.api.getLocationInView('xpath', SelectorResultXpath);
      await this.api.pause(500);
      await this.api.CoveoClick(SelectorResultXpath, index);
    }

    await this.api.pause(1000);
    return res;
  }
};
