const { SelectorExtract } = require('../Utils/Utilities');

/**
 * Select a color at Random
 * @return {[Promise]}
 */

module.exports = class CoveoSelectRandomColor {

  async command() {
    //
    // Assuming we are in a PDP when using this action. 
    //

    let res = await this.api.pause(1); // only to have a valid 'res'. 

    // get all colors
    let items = (await this.api.elements('css selector', '.available-color__swatch')).value;
    if (items.length > 0) {
      // select a color at random
      let idx = Math.floor(Math.random() * items.length);
      // click on the color swatch
      res = await this.api.elementIdClick(items[idx].ELEMENT);
      res = await this.api.pause(1000);
    }

    return res;
  }

};
