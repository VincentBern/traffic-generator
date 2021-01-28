module.exports = class CoveoClick {
  async command(selector, willTriggerSearch = false) {

    let lastSearchUid = '';
    if (willTriggerSearch) {
      let lastResponse = await this.api.getLastResponse();
      lastSearchUid = (lastResponse && lastResponse.searchUid);
    }

    let result = await this.api.waitForElementVisible(selector);
    if (result.status == -1) return false;

    result = await this.api.moveToElement(selector, 10, 10);
    if (result.status == -1) return false;

    result = await this.api.click(selector);

    if (willTriggerSearch) {
      await this.api.CoveoWaitForSearch(lastSearchUid);
    }

    return (result.status !== -1);
  }
};
