const { fileReader, cssToXpath } = require('../Utils/Utilities');
const Headless = fileReader("input/selectors/GenericStore.json");

module.exports = class CoveoOpenResultByTitle {

  async command(
    text = '',
    resultListSelector = Headless.searchPage.resultListContainer,
    resultCard = Headless.result.resultCard,
    resultTitle = Headless.result.resultTitle
  ) {

    let path = '';
    if (resultListSelector && resultListSelector !== '') {
      path = cssToXpath(resultListSelector);
    }

    const resultPath = cssToXpath(resultCard + ' ' + resultTitle);
    path += resultPath + `[contains(text(),'${text}')]`;

    this.api.useXpath();
    let res = await this.api.CoveoResultVisibleWithPagination(path);

    if (res) {
      // Scroll element into view
      await this.api.getLocationInView(path, async () => {
        await this.api.execute('scrollTo(0, 0)')
      });
      await this.api.pause(500);
      await this.api.click('xpath', path);
    }

    await this.api.pause(1000);
    this.api.useCss();

    return res;
  }
};
