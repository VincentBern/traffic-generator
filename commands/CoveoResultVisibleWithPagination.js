const { cssToXpath } = require('../Utils/Utilities');
const { SelectorExtract } = require('../Utils/Utilities');

module.exports = class CoveoResultVisibleWithPagination {

  async isVisible(xpathSelector, resolvePromise, iterations, Selectors) {

    const { paginationNextSelector } = SelectorExtract(Selectors);

    if (iterations === 0) {
      resolvePromise(false);
      return;
    }

    await this.api.isVisible('xpath', xpathSelector, async (result) => {
      if (result.status === -1) {
        const nextPageResult = await this.api.click('xpath', cssToXpath(paginationNextSelector));

        if (nextPageResult.status === -1) {
          resolvePromise(false);
          return;
        }
        else {
          await this.isVisible(xpathSelector, resolvePromise, --iterations, Selectors);
        }
      }
      else {
        resolvePromise(true);
        return;
      }
    })
  }

  async isVisibleWithPagination(xpathSelector, paginationDepth, Selectors) {
    return new Promise(async (resolvePromise) => {
      await this.isVisible(xpathSelector, resolvePromise, paginationDepth, Selectors);
    })
  }

  async command(xpathSelector, paginationDepth = 5, Selectors) {
    let res = await this.isVisibleWithPagination(xpathSelector, paginationDepth, Selectors);
    return res;
  }
};