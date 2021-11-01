const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Select a color at Random
 * @return {[Promise]}
 */

module.exports = class CoveoSelectRandomRecommendation {

  async command(options) {
    //
    // Assuming we are in a PDP when using this action. 
    //

    let res = await this.api.pause(1); // only to have a valid 'res'. 

    // get all elements
    let items = (await this.api.elements('css selector', '.recommendations-card__media')).value;
    if (items.length > 0) {
      // choose one element at random
      let idx = Math.floor(Math.random() * items.length);
      // click the element
      res = await this.api.elementIdClick(items[idx].ELEMENT);
      res = await this.api.pause(1000);

      options.randomElementWasFound = true;
    }

    return res;
  }

};
