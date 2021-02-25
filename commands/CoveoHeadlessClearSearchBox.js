const { fileReader } = require('../Utils/Utilities');
const Headless = fileReader("input/selectors/GenericStore.json");

module.exports = class CoveoHeadlessClearSearchBox {
  async command(inputBoxSelector = Headless.searchBox.input, clearButtonSelector = Headless.searchBox.clearButton) {

    const clearDirty = clearButtonSelector.dirty;
    const clearButton = clearButtonSelector.button;

    let result = await this.api.waitForElementVisible(inputBoxSelector);
    if (result.status == -1) return false;

    // Click on input so that clear button shows up
    await this.api.click(inputBoxSelector);
    await this.api.pause(500);

    let clearButtonResponse = await this.api.CoveoIsVisible(clearDirty);

    // need to check with 'true' because value would be an object in case of error.
    if (clearButtonResponse === true) {
      result = await this.api.click(clearButton);
      await this.api.pause(500);
    }
    else {
      result = await this.api.clearValue(inputBoxSelector);
    }
  }
}