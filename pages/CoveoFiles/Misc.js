const coveoMiscCommands = {
  //*******************************************************
  //c_selectTab, tab to select (using the caption)
  //*******************************************************
  c_selectTab: function (caption) {
    let _this = this;
    let selector = '.CoveoTab[data-caption="' + caption + '"]';
    return new Promise((resolve) => {
      this.api.page.CoveoFiles.Generic()
        .c_click(selector)
        .then(function (result) {
          if (result) {
            _this.api.page.CoveoFiles.Generic().c_Pause();
            resolve(true);
          } else {
            resolve(false);
          }
        });
    });
  },
  //*******************************************************
  //c_loginOffice
  //*******************************************************
  c_loginOffice: async function (user, pass) {
    let res = true;
    if (res)
      res = await this.api.page.CoveoFiles.Generic().c_click(
        "#loginWithOffice365"
      );
    if (res)
      res = await this.api.page.CoveoFiles.Generic().c_setValue("#i0116", user);
    if (res)
      res = await this.api.page.CoveoFiles.Generic().c_click("#idSIButton9");
    if (res)
      res = await this.api.page.CoveoFiles.Generic().c_setValue("#i0118", pass);
    if (res)
      res = await this.api.page.CoveoFiles.Generic().c_click("#idSIButton9");
    if (res)
      res = await this.api.page.CoveoFiles.Generic().c_click("#idBtn_Back");
    return res;
  },
};

module.exports = {
  commands: [coveoMiscCommands],
};
