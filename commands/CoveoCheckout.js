const SELECTORS = require('../input/selectors/GenericStore.json');

/**
 * Clicks on the cart icon and complete the checkout (purchase)
 * @return {[Promise]} 
 */

module.exports = class CoveoCheckout {

  async command() {
    let res;

    const header = SELECTORS.header;
    const cartPage = SELECTORS.cartPage;

    res = await this.api.waitForElementVisible(header.cart);
    res = await this.api.click(header.cart);
    res = await this.api.waitForElementVisible(cartPage.container);
    res = await this.api.click(cartPage.checkoutButton);

    res = await this.api.pause(1000);

    return res;
  }

};
