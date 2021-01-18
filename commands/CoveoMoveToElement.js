module.exports = class CoveoMoveToElement {
  async command(selector, xoffset = 10, yoffset = 10) {
    let result = await this.api.moveToElement(selector, xoffset, yoffset);
    if (result.status == -1) return false;
  }
};
