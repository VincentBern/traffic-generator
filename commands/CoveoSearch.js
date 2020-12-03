module.exports = class CoveoSearch {
  async command(text, searchinterface = "", selector = ".CoveoSearchbox .magic-box-input > input") {
    const inputBoxSelector = `${searchinterface} ${selector}`;

    let result = await this.api.page.CoveoFiles.Generic().c_waitForElement(inputBoxSelector);
    if (result.status == -1) {
      return false;
    }

    result = await this.api.clearValue(inputBoxSelector);
    if (result.status == -1) {
      await this.api.page.CoveoFiles.Generic().c_Pause();
      return false;
    }

    result = this.api.setValue(inputBoxSelector, text);
    if (result.status != -1) {
      await this.api.page.CoveoFiles.Generic().c_Pause();
      return true;
    }

    return false;
  }
};
