const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Clicks on a result item based on list index numner
 * @param  {[number]} nthValue Result index number
 * @param  {[string]} Selector Custom Selector (not requeried)
 * @return {[Promise]} true if click was successful, false if it wasn't
 */

module.exports = class CoveoClickResultByNumber {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }

  async selectResultByNumber(selector, nthValue) {
    return new Promise(async (resolve) => {
      await this.api.elements('css selector', selector, async (results) => {

        if (typeof nthValue !== 'number') {
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

    let res = await this.api.isVisible(Selector_resultList_ResultCard);

    res = await this.selectResultByNumber(Selector_resultList_ResultCard, nthValue);
    await this.api.pause(3000);
    return res;
  }
};
