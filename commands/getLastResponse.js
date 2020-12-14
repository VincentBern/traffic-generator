module.exports = class CustomCommand {
  command() {
    return new Promise(resolve => {
      this.api.executeAsync(function (done) {
        setTimeout(() => done(window._LAST_COVEO_RESPONSE), 1);
      }, (result) => {
        // console.log('LastResponse:', result);
        resolve(JSON.parse(result.value));
      });
    });
  }
};
