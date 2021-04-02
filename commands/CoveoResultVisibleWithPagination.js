const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Check if result is visible, and go through multiple pages if necessary
 * @param  {[string]} xpathSelector String with xpath to element
 * @param  {[integer]} paginationDepth how many pages should be searched through. Default: 5
 * @param  {[Object]} Selectors Object containing selectors
 * @return {[Promise]} true if item becomes visible at some point, false if it wasn't
 */

module.exports = class CoveoResultVisibleWithPagination {

  async isVisible(xpathSelector, resolvePromise, iterations, Selectors) {

    if (iterations === 0) {
      resolvePromise(false);
      return;
    }

    await this.api.isVisible('xpath', xpathSelector, async (result) => {

      if (result.status === -1) {

        const { paginationNextSelector } = SelectorExtract(Selectors).getSelectors('xpath');
        const nextPageResult = await this.api.click('xpath', paginationNextSelector);

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