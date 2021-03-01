const HeadlessSelectors = require("../input/selectors/GenericStore.json");
const JSUISelectors = require("../input/selectors/JSUI.json");

module.exports = class CoveoSearch {
  async command(text, searchinterface, searchBox = JSUISelectors.searchBox.input + ', ' + HeadlessSelectors.searchBox.input) {

    const inputBoxSelector = `${searchinterface} ${searchBox}`;

    let result = await this.api.waitForElementVisible(inputBoxSelector);
    if (result.status == -1) return false;

    // Add condition to operate ONLY when using JSUI
    let lastSearchUid = (await this.api.getLastResponse()).searchUid;

    await this.api.click(inputBoxSelector);
    result = await this.api.setValue(inputBoxSelector, text);
    result = await this.api.keys(this.api.Keys.ENTER);

    // Add condition to operate ONLY when using JSUI
    await this.api.CoveoWaitForSearch(lastSearchUid);
    await this.api.pause(1000); // slow down a bit for UA events

    return (result.status !== -1);
  }
};
