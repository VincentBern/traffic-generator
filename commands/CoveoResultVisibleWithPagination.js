const { cssToXpath } = require('../Utils/Utilities');
const HeadlessSelectors = require("../input/selectors/GenericStore.json");

module.exports = class CoveoResultVisibleWithPagination {

  async isVisible(xpathSelector, resolvePromise, iterations) {

    if (iterations === 0) {
      resolvePromise(false);
      return;
    }

    await this.api.isVisible('xpath', xpathSelector, async (result) => {
      if (result.status === -1) {
        const nextPageResult = await this.api.click('xpath', cssToXpath(HeadlessSelectors.pagination.next));

        if (nextPageResult.status === -1) {
          resolvePromise(false);
          return;
        }
        else {
          await this.isVisible(xpathSelector, resolvePromise, --iterations);
        }
      }
      else {
        resolvePromise(true);
        return;
      }
    })
  }

  async isVisibleWithPagination(xpathSelector) {
    return new Promise(async (resolvePromise) => {
      await this.isVisible(xpathSelector, resolvePromise, 5);
    })
  }

  async command(xpathSelector) {
    let res = await this.isVisibleWithPagination(xpathSelector);
    return res;
  }
};