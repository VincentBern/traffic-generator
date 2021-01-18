module.exports = class CoveoSelectFacetValue {
  async command(caption) {
    let selector = `.CoveoTab[data-caption="${caption}"]`;
    return await this.api.click(selector);
  }
};
