module.exports = class CustomCommand {
  async command(selector) {
    let result = await this.api.moveToElement(selector);
    if (result.status == -1) return false;
  }
};
