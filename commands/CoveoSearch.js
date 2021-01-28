module.exports = class CoveoSearch {
  async command(text, searchinterface = "", selector = ".CoveoSearchbox .magic-box-input > input") {
    const inputBoxSelector = `${searchinterface} ${selector}`;

    let result = await this.api.waitForElementVisible(inputBoxSelector);
    if (result.status == -1) return false;

    result = await this.api.clearValue(inputBoxSelector);
    if (result.status == -1) return false;


    let lastSearchUid = (await this.api.getLastResponse()).searchUid;

    result = await this.api.setValue(inputBoxSelector, text);
    result = await this.api.keys(this.api.Keys.ENTER);

    await this.api.pause(1000);
    await this.api.CoveoWaitForSearch(lastSearchUid);

    await this.api.waitForElementPresent('.CoveoSearchInterface.coveo-after-initialization');
    await this.api.waitForElementNotPresent('.CoveoSearchInterface.coveo-after-initialization.coveo-executing-query');

    return (result.status !== -1);
  }
};
