module.exports = class CoveoSearch {
  async command(text, searchinterface = "", selector = ".CoveoSearchbox .magic-box-input > input, #search-box") {
    console.log('In CoveoSearch, for: ' + text);
    const inputBoxSelector = `${searchinterface} ${selector}`;

    let result = await this.api.waitForElementVisible(inputBoxSelector);
    console.log('In CoveoSearch, wait input: ' + JSON.stringify(result));
    if (result.status == -1) return false;

    await this.api.pause(1000);
    console.log('clearValue Searchbox');
    await this.api.click(selector);
    let value = await this.api.getValue(selector);
    //First sent END
    /*await this.api.setValue(selector, "\uE010");
    console.log(value.value);
    for (var i = 0; i < value.value.length; i++) {
      //await this.api.Keys.BACKSPACE;
      await this.api.setValue(selector, "\u0008");
    }*/
    result = await this.api.setValue(selector, [
      this.api.Keys.CONTROL,
      "a",
      this.api.Keys.DELETE,
    ]);

    result = await this.api.clearValue(inputBoxSelector);
    console.log('In CoveoSearch, clear input: ' + JSON.stringify(result));
    if (result.status == -1) return false;


    await this.api.pause(1000);
    //let lastSearchUid = (await this.api.getLastResponse()).searchUid;
    result = await this.api.setValue(inputBoxSelector, '');

    result = await this.api.setValue(inputBoxSelector, text);
    await this.api.pause(1000);
    result = await this.api.keys(this.api.Keys.ENTER);

    await this.api.pause(1000);
    //await this.api.CoveoWaitForSearch(lastSearchUid);
    console.log('return Searchbox');

    return (result.status !== -1);
  }
};
