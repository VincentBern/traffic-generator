const { SelectorExtract } = require('../Utils/Utilities');

module.exports = class CoveoOpenResult {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }

  async selectResultByNumber(selector, nthValue) {
    return new Promise(async (resolve) => {
      await this.api.elements('css selector', `${selector}`, async (results) => {

        if (nthValue === 'RND' || nthValue === "") {
          nthValue = this.getRandomInt(1, results.value.length);
        }

        await this.api.elementIdClick(results.value[nthValue - 1].ELEMENT);
        resolve(true);
      });
    })
  }

  async command(
    nthValue = "RND",
    Selectors = null
  ) {

    const Selector_resultList_ResultCard
      = SelectorExtract(Selectors).getParentChildSelector("resultListSelector", "resultLinkSelector");

    let res = await this.selectResultByNumber(Selector_resultList_ResultCard, nthValue);
    await this.api.pause(3000);
    return res;
  }
};
