const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Open Mega menu and Select a category at Random
 * @return {[Promise]}
 */

module.exports = class CoveoSelectRandomlyFromShopMenu {

  async command() {
    let res;
    res = await this.api.click('#shop-mega-menu-button');
    res = await this.api.waitForElementVisible('.megamenu__container');
    res = await this.api.waitForElementVisible('.megamenu__sublist-container');

    // select a Top level at random
    let itemsCount = await this.api.elements('css selector', '.megamenu__root-list li', result => { return result.value.length; });
    let idx = 1 + Math.floor(Math.random() * itemsCount);

    res = await this.api.moveToElement(`.megamenu__root-list li:nth-child(${idx})`, 10, 10);
    res = await this.api.pause(1000);

    // select a Sub-menu at random
    let items = (await this.api.elements('css selector', '.megamenu__sublist-container a')).value;
    idx = Math.floor(Math.random() * items.length);
    res = await this.api.elementIdClick(items[idx].ELEMENT);

    res = await this.api.pause(1000);

    return res;
  }

};
