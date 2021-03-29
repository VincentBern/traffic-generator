const GenericStoreSelectors = require("../input/selectors/GenericStore.json");
const JSUISelectors = require("../input/selectors/JSUI.json");
const { SelectorExtract } = require('../Utils/Utilities');

module.exports = class CoveoClearSearchBox {
  async command(
    Selectors = { GenericStoreSelectors, JSUISelectors }
  ) {

    const { searchBoxInputSelector, searchBoxClearButtonSelector } = SelectorExtract(Selectors);

    let result = await this.api.waitForElementVisible(searchBoxInputSelector);
    if (result.status == -1) return false;

    // Click on input so that clear button shows up
    await this.api.click(searchBoxInputSelector);
    await this.api.pause(500);

    let clearButtonResponse = await this.api.CoveoIsVisible(searchBoxClearButtonSelector);

    // need to check with 'true' because value would be an object in case of error.
    if (clearButtonResponse === true) {
      result = await this.api.click(searchBoxClearButtonSelector);
      await this.api.pause(500);
    }

    result = await this.api.clearValue(searchBoxInputSelector);
  }
}