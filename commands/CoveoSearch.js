const GenericStoreSelectors = require("../input/selectors/GenericStore.json");
const JSUISelectors = require("../input/selectors/JSUI.json");
const { SelectorExtract } = require('../Utils/Utilities');

module.exports = class CoveoSearch {
  async command(
    text,
    Selectors = { GenericStoreSelectors, JSUISelectors }) {

    const { searchBoxInputSelector } = SelectorExtract(Selectors);

    let result = await this.api.waitForElementVisible(searchBoxInputSelector);
    if (result.status == -1) return false;

    await this.api.CoveoClearValue(searchBoxInputSelector);

    // Add condition to operate ONLY when using JSUI
    // let lastSearchUid = (await this.api.getLastResponse()).searchUid;

    await this.api.click(searchBoxInputSelector);
    result = await this.api.setValue(searchBoxInputSelector, text);
    result = await this.api.keys(this.api.Keys.ENTER);

    // Add condition to operate ONLY when using JSUI
    // await this.api.CoveoWaitForSearch(lastSearchUid);
    await this.api.pause(1000); // slow down a bit for UA events

    return (result.status !== -1);
  }
};
