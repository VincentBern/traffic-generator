module.exports = class CustomCommand {
  async command(selector) {
    let result = await this.api.waitForElementVisible(selector);
    if (result.status == -1) return false;

    result = await this.api.click({
      selector: selector,
      abortOnFailure: false,
      suppressNotFoundErrors: true,
    });

    return (result.status !== -1);
  }
};
