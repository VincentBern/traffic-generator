module.exports = class CustomCommand {
  async command(selector) {
    let result = await this.api.page.CoveoFiles.Generic().c_waitForElement(selector);
    console.log(result);
    if (result.status != -1) {
      console.log("Click on Element ", selector);
      result = await this.api.click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      });

      if (result.status != -1) {
        console.log("CLICKED ON ", selector);
        await this.api.page.CoveoFiles.Generic().c_Pause();
        return true;
      }
      console.log("NO Click because element was not found (step 2) ", selector, result);
      return false;
    }
    console.log("NO Click because element was not found (step 1) ", selector);
    return false;
  }
};
