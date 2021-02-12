module.exports = class CoveoSearch {
  async command(text, searchinterface = "", selector = ".CoveoSearchbox .magic-box-input > input, #search-box") {
    const inputBoxSelector = `${searchinterface} ${selector}`;

    let result = await this.api.waitForElementVisible(inputBoxSelector);
    if (result.status == -1) return false;

    await this.api.click(inputBoxSelector);
    await this.api.pause(500);

    let clearButton = await this.api.CoveoIsVisible('button.MuiAutocomplete-clearIndicator.MuiAutocomplete-clearIndicatorDirty');
    if (clearButton === true) { // need to check with 'true' because value would be an object in case of error.
      result = await this.api.click('button.MuiAutocomplete-clearIndicator');
      await this.api.pause(500);
    }
    else {
      result = await this.api.clearValue(inputBoxSelector);
    }
    if (result.status == -1) return false;

    let lastSearchUid = (await this.api.getLastResponse()).searchUid;

    await this.api.click(inputBoxSelector);
    result = await this.api.setValue(inputBoxSelector, text);
    result = await this.api.keys(this.api.Keys.ENTER);

    await this.api.CoveoWaitForSearch(lastSearchUid);
    await this.api.pause(1000); // slow down a bit for UA events

    return (result.status !== -1);
  }
};
