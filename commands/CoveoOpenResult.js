module.exports = class CoveoOpenResult {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }

  async command(nthValue = "RND", closeWindow = false, resultlist = "", max = 5, specific = "") {
    if (nthValue === "RND") {
      nthValue = this.getRandomInt(1, max);
    }

    let selector = `${resultlist} .CoveoResultList .CoveoResult:nth-child(${nthValue}) .CoveoResultLink`.trim();
    if (specific) {
      selector = specific;
    }
    let res = await this.api.click(selector);
    await this.api.pause(1000);

    if (closeWindow) {
      let closeCurrentWindow = false;
      await this.api.windowHandles((result) => {
        if (result.value.length == 2) {
          handle = result.value[1];
          this.api.switchWindow(handle);
          closeCurrentWindow = true;
        }
      });

      if (closeCurrentWindow) {
        this.api.closeWindow();
        await this.api.windowHandles((result) => {
          handle = result.value[0];
          this.api.switchWindow(handle);
        });
      } else {
        this.api.back();
      }
      await this.api.pause(500);
    }

    return res;
  }
};
