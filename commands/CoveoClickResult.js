const HeadlessSelectors = require("../input/selectors/GenericStore.json");

module.exports = class CoveoOpenResult {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }

  async command(
    nthValue = "RND",
    resultListSelector = HeadlessSelectors.searchPage.resultListContainer,
    resultCardSelector = HeadlessSelectors.result.resultCard,
  ) {
    if (nthValue === "RND") {
      let results = await this.api.elements('css selector', `${resultListSelector} ${resultCardSelector}`);
      nthValue = this.getRandomInt(1, results.value.length);
    }

    let selector = `${resultListSelector} ${resultCardSelector}:nth-child(${nthValue}) .CoveoResultLink`.trim();

    let res = await this.api.click(selector);
    await this.api.pause(3000);
    return res;
  }
};
