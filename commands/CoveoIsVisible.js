module.exports = class CoveoIsVisible {
  async command(using, selector) {
    if (!selector) {
      selector = using;
      using = 'css selector';
    }
    let results = await this.api.elements(using, selector);
    if (results.status !== 0) {
      return false;
    }

    return (results.value.length > 0);
  };
};
