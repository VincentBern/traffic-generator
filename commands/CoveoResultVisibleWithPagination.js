const { fileReader, cssToXpath } = require('../Utils/Utilities');
const Headless = fileReader("input/selectors/GenericStore.json");

module.exports = class CoveoResultVisible {

  async isVisible(path, resolvePromise, iterations) {

    if (iterations === 0) {
      resolvePromise(false);
      return;
    }

    await this.api.isVisible(path, async (result) => {
      if (result.status === -1) {
        const nextPageResult = await this.api.click(cssToXpath(Headless.pagination.next));

        if (nextPageResult.status === -1) {
          resolvePromise(false);
          return;
        }
        else {
          await this.isVisible(path, resolvePromise, --iterations);
        }
      }
      else {
        resolvePromise(true);
        return;
      }
    })
  }

  async isVisibleWithPagination(path) {
    return new Promise(async (resolvePromise) => {
      await this.isVisible(path, resolvePromise, 5);
    })
  }

  async command(resultxPath) {
    this.api.useXpath();
    let res = await this.isVisibleWithPagination(resultxPath);
    return res;
  }
};