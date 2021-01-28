module.exports = class CoveoClickResultLink {
  async command(text) {
    let result = await this.api.waitForElementVisible('link text', text);
    if (result.status == -1) return false;

    result = await this.api.moveToElement('link text', text, 10, 10);
    if (result.status == -1) return false;

    result = await this.api.click('link text', text);

    return (result.status !== -1);
  }
};
