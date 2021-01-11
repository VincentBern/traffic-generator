module.exports = class CustomCommand {
  async command(browser, selector, url) {
    let result;
    return new Promise((resolve) => {
      //      let result = this.api.waitForElementVisible(selector);
      //  if (result.status == -1) return false;
      browser.listenXHR();
      browser.pause(1000);
      result = browser.click({
        selector: selector,
        abortOnFailure: false,
        suppressNotFoundErrors: true,
      });
      browser.pause(1000);
      browser.getXHR(
        "",
        2000,
        /*browser.waitForXHR(
        url,
        2000,
        function trigger() {
          result = browser.click({
            selector: selector,
            abortOnFailure: false,
            suppressNotFoundErrors: true,
          });
        },*/
        function assertValues(xhr) {
          /*browser.assert.equal(xhr.status, "success");
          browser.assert.equal(xhr.method, "POST");
          browser.assert.equal(xhr.requestData, "200");
          browser.assert.equal(xhr.httpResponseCode, "200");
          browser.assert.equal(xhr.responseData, "");*/
          console.log(xhr);
          resolve(result.status !== -1, xhr);
        }
      );
    });
  }
};
