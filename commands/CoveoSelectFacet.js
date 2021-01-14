module.exports = class CoveoSelectFacetValue {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }
  async command(field, nthValue = "RND", max = 5) {
    if (nthValue === "RND") {
      nthValue = this.getRandomInt(1, max);
    }

    if (field && !field.startsWith('@')) {
      field = `@${field}`;
    }

    let selector = `*[data-field="${field}"] > ul > li:nth-child(${nthValue})`;
    let res = await this.api.click(selector);

    res = await this.api.CoveoWaitForSearch();

    return { ...res, field, nthValue };
  }
};
