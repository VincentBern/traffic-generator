const GenericStoreSelectors = require("../input/selectors/GenericStore.json");
const JSUISelectors = require("../input/selectors/JSUI.json");
const { SelectorExtract } = require('../Utils/Utilities');

module.exports = class CoveoOpenResult {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }

  async command(
    nthValue = "RND",
    Selectors = { GenericStoreSelectors, JSUISelectors }
  ) {

    const { resultListSelector, resultCardSelector, resultLinkSelector } = SelectorExtract(Selectors);

    if (nthValue === "RND") {
      let results = await this.api.elements('css selector', `${resultListSelector} ${resultCardSelector}`);
      nthValue = this.getRandomInt(1, results.value.length);
    }

    let selector = `${resultListSelector} ${resultCardSelector}:nth-child(${nthValue}) ${resultLinkSelector}`.trim();

    let res = await this.api.click(selector);
    await this.api.pause(3000);
    return res;
  }
};
