const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Search using main searchBox
 * @param  {[string]} text String to search by
 * @param  {[string]} Selectors String to search product by
 * @return {[Promise]} true if search was successful, false if it wasn't
 */

module.exports = class CoveoSearch {
  async command(
    text,
    Selectors) {

    const searchBoxInputSelector = SelectorExtract(Selectors).getSelector('searchBoxInputSelector');

    let result = await this.api.waitForElementVisible(searchBoxInputSelector);
    if (result.status == -1) return false;

    await this.api.CoveoClearSearchBox(searchBoxInputSelector);

    // Add condition to operate ONLY when using JSUI
    // let lastSearchUid = (await this.api.getLastResponse()).searchUid;

    await this.api.click(searchBoxInputSelector);
    result = await this.api.setValue(searchBoxInputSelector, text);
    await this.api.pause(250); // slow down a bit for UA events

    result = await this.api.setValue(searchBoxInputSelector, '\ue007');
    // result = await this.api.keys(this.api.Keys.ENTER);
    // result = await this.api.keys(this.api.Keys.NULL); // release keys

    // Add condition to operate ONLY when using JSUI
    // await this.api.CoveoWaitForSearch(lastSearchUid);
    await this.api.pause(1000); // slow down a bit for UA events

    return (result.status !== -1);
  }
};
