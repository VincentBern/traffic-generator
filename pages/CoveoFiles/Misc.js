const coveoMiscCommands = {

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
