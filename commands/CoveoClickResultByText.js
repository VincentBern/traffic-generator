const { SelectorExtract } = require('../Utils/Utilities');

module.exports = class CoveoOpenResultByTitle {

  async command(
    text = '',
    Selectors,
    exactMatch = false,
    paginationDepth = 5
  ) {

    let SelectorResultXpath = '';

    if (exactMatch) {
      SelectorResultXpath +=
        SelectorExtract(Selectors).getParentChildSelector(
          "resultListSelector",
          "resultTitleSelector",
          "xpath",
          "[text()='" + text + "'])"
        );
    }
    else {
      SelectorResultXpath +=
        SelectorExtract(Selectors).getParentChildSelector(
          "resultListSelector",
          "resultTitleSelector",
          "xpath",
          "[contains(text(),'" + text + "')]"
        );
    }

    let res = await this.api.CoveoResultVisibleWithPagination(SelectorResultXpath, paginationDepth, Selectors);

    if (res) {
      // Scroll element into view
      await this.api.getLocationInView('xpath', SelectorResultXpath);
      await this.api.pause(500);
      await this.api.click('xpath', SelectorResultXpath);
    }

    await this.api.pause(1000);
    return res;
  }
};
