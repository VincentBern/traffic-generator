module.exports = class CoveoOpenResult {

  getRandomInt(min, max) {
    return min + Math.floor(Math.random() * Math.floor(max));
  }

  async command(nthValue = "RND", closeWindow = false, resultlist = "", max = 5, specific = "") {
    if (nthValue === "RND") {
      let results = await this.api.elements('css selector', `${resultlist} .CoveoResultList .CoveoResult`);
      max = Math.min(max, results?.value?.length || 1);

      nthValue = this.getRandomInt(1, max);
    }

    let selector = `${resultlist} .CoveoResultList .CoveoResult:nth-child(${nthValue}) .CoveoResultLink, .MuiGrid-spacing-xs-4 .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-4:nth-child(${nthValue}) .MuiLink-root`.trim();
    if (specific) {
      selector = specific;
    }
    console.log('In CoveoOpenResult');
    console.log(selector);
    await this.api.pause(1000);
    //let res = await this.api.click(selector);
    let res = await this.api.click(
      {
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      });
    console.log('In CoveoOpenResult, click: ' + JSON.stringify(res));
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
