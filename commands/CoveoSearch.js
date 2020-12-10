module.exports = class CoveoSearch {
  async command(text, searchinterface = "", selector = ".CoveoSearchbox .magic-box-input > input") {
    const inputBoxSelector = `${searchinterface} ${selector}`;

    let result = await this.api.waitForElementVisible(inputBoxSelector);
    if (result.status == -1) return false;

    result = await this.api.clearValue(inputBoxSelector);
    if (result.status == -1) return false;

    result = await this.api.setValue(inputBoxSelector, text);
    result = await this.api.keys(this.api.Keys.ENTER);

    return (result.status !== -1);
  }
};
