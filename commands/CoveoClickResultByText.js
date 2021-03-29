const { cssToXpath } = require('../Utils/Utilities');
const { SelectorExtract } = require('../Utils/Utilities');
const GenericStoreSelectors = require("../input/selectors/GenericStore.json");
const JSUISelectors = require("../input/selectors/JSUI.json");

module.exports = class CoveoOpenResultByTitle {

  async command(
    text = '',
    Selectors = { GenericStoreSelectors, JSUISelectors },
    exactMatch = false,
    paginationDepth = 5
  ) {

    const { resultListSelector, resultCardSelector, resultTitleSelector } = SelectorExtract(Selectors);

    let path = '';
    if (resultListSelector && resultListSelector !== '') {
      path = cssToXpath(resultListSelector);
    }

    const resultPath = cssToXpath(resultCardSelector + ' ' + resultTitleSelector);
    path += exactMatch ? resultPath + `[text()='${text}'])` : resultPath + `[contains(text(),'${text}')]`;

    let res = await this.api.CoveoResultVisibleWithPagination(path, paginationDepth, Selectors);

    if (res) {
      // Scroll element into view
      await this.api.getLocationInView('xpath', path, async (reso) => {
        // await this.api.execute('scrollTo(0, 0)')
      });
      await this.api.pause(500);
      await this.api.click('xpath', path);
    }

    await this.api.pause(1000);
    return res;
  }
};
