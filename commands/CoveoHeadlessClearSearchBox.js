const HeadlessSelectors = require("../input/selectors/GenericStore.json");

module.exports = class CoveoHeadlessClearSearchBox {
  async command(
    inputBoxSelector = HeadlessSelectors.searchBox.input,
    _clearButtonSelector = HeadlessSelectors.searchBox.clearButton) {

    const clearDirtySelector = _clearButtonSelector.dirty;
    const clearButtonSelector = _clearButtonSelector.button;

    let result = await this.api.waitForElementVisible(inputBoxSelector);
    if (result.status == -1) return false;

    // Click on input so that clear button shows up
    await this.api.click(inputBoxSelector);
    await this.api.pause(500);

    let clearButtonResponse = await this.api.CoveoIsVisible(clearDirtySelector);

    // need to check with 'true' because value would be an object in case of error.
    if (clearButtonResponse === true) {
      result = await this.api.click(clearButtonSelector);
      await this.api.pause(500);
    }
    else {
      result = await this.api.clearValue(inputBoxSelector);
    }
  }
}