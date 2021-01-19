module.exports = class CustomCommand {
  command(selector = ".CoveoResult") {
    return new Promise(resolve => {
      this.api.execute(function (selector, done) {
        let results = document.querySelectorAll(selector);
        results.forEach(r => r.classList.add('nightwatch-invalidated-result'));
        setTimeout(done, 1);
      },
        [selector],
        resolve);
    });
  }
};
