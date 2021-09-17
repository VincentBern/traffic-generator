/**
 * Clear searchbox by 'backspacing' on each character
 * @param  {[string]} selector String to search product by
 * @return {[Promise]} true if clear was successful, false if it wasn't
 */

module.exports = class CoveoClearValue {
  async command(selector) {
    const { RIGHT_ARROW, BACK_SPACE } = this.api.Keys;

    let valueClearRes = await this.api.getValue(selector, async (result) => {
      const chars = result.value.split('');
      // Make sure we are at the end of the input
      for (const char of chars) {
        await this.api.setValue(selector, RIGHT_ARROW);
      }
      for (const char of chars) {
        await this.api.setValue(selector, BACK_SPACE);
      }
    });

    await this.api.pause(250);

    return valueClearRes;
  }
};
