const SELECTORS = require('../input/selectors/GenericStore.json');

/**
 * Clicks on Add to Cart in the PDP page. 
 * @return {[Promise]}
 */

module.exports = class CoveoBuy {

  async command() {
    let res;

    const pdp = SELECTORS.productDetailPage;
    res = await this.api.waitForElementVisible(pdp.container);
    res = await this.api.click(pdp.addToCart);
    res = await this.api.pause(1000);

    return res;
  }

};
