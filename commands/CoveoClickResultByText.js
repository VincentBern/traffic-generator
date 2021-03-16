const { cssToXpath } = require('../Utils/Utilities');
const HeadlessSelectors = require("../input/selectors/GenericStore.json");

module.exports = class CoveoOpenResultByTitle {

  async command(
    text = '',
    paginationDepth = 5,
    resultListSelector = HeadlessSelectors.searchPage.resultListContainer,
    resultCardSelector = HeadlessSelectors.result.resultCard,
    resultTitleSelector = HeadlessSelectors.result.resultTitle
  ) {

    let path = '';
    if (resultListSelector && resultListSelector !== '') {
      path = cssToXpath(resultListSelector);
    }

    const resultPath = cssToXpath(resultCardSelector + ' ' + resultTitleSelector);
    path += resultPath + `[contains(text(),'${text}')]`;

    let res = await this.api.CoveoResultVisibleWithPagination(path, paginationDepth);

    if (res) {
      // Scroll element into view
      await this.api.getLocationInView('xpath', path, async () => {
        await this.api.execute('scrollTo(0, 0)')
      });
      await this.api.pause(500);
      await this.api.click('xpath', path);
    }

    await this.api.pause(1000);
    return res;
  }
};
