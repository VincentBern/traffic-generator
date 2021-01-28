module.exports = class getLastResponse {
  command() {
    return new Promise(resolve => {
      this.api.executeAsync(function (done) {
        setTimeout(() => done(window._LAST_COVEO_RESPONSE), 1);
      }, (result) => {
        let response = JSON.parse(result.value) || {};
        // console.log('LastResponse:', response.searchUid);
        resolve(response);
      });
    });
  }
};
