module.exports = class CoveoOpenResultByTitle {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }

  async nextPage() {
    return await this.api.click("//*[contains(@class, 'MuiPagination-root')]//*[contains(@aria-label, 'Go to next page')]");
  }

  async isVisible(path, resolvePromise, iterations) {

    if (iterations === 0) {
      resolvePromise(false);
      return;
    }

    await this.api.isVisible(path, async (result) => {
      if (result.status === -1) {
        const nextPageResult = await this.nextPage();

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

  async command(xpathText = '', resultlist = "#result-list--search-page") {

    let path = '';

    if (resultlist) {
      path = resultlist.charAt(0) === '#' ? `//*[@id="${resultlist.substring(1)}"]` : `//*[contains(@class, ${resultlist.substring(1)})]`
    }

    path += `//*[contains(@class, 'CoveoResult')]//*[contains(@class, 'CoveoResultLink')][contains(text(),'${xpathText}')]`;

    this.api.useXpath();

    let res = await this.isVisibleWithPagination(path);

    if (res) {

      await this.api.getLocationInView(path, async (result) => {
        await this.api.execute('scrollTo(0, 0)')
      });

      await this.api.pause(1000);

      await this.api.click('xpath', path);
    }

    await this.api.pause(1000);

    this.api.useCss();

    return res;
  }
};
