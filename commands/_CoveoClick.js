module.exports = class _CoveoClick {
  async command(SelectorResultXpath, index = 0) {

    return new Promise(async (res) => {

      return await this.api.execute(function (SelectorResultXpath, index) {
        return new Promise(async (executeResolve) => {

          // Get element by xpath inside broswer
          function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
          }

          // Check if item was indeed clicked
          var wasClicked = false;
          // Selector Node for expath
          var xpathResult = getElementByXpath(SelectorResultXpath);

          let selector = null;
          let counter = 0;

          while (!selector) {
            if (index === counter) {
              selector = xpathResult.iterateNext();
            } else {
              xpathResult.iterateNext()
            }
            counter++;
          }

          if (!selector) {
            executeResolve('noClick');
          }

          selector.addEventListener("click", (e) => {
            wasClicked = true;
            executeResolve('clicked');
          });

          if (!wasClicked) {
            selector.click();
          }

          // In case selector.click() didn't work
          setTimeout(() => {
            var clickEvent = new Event('click', { bubbles: true });
            if (!wasClicked) {
              selector.dispatchEvent(clickEvent);
            }
          }, 1000);
        })
      }, [SelectorResultXpath, index], function (r) {
        if (r.value === 'clicked') {
          res(true);
        }
        res(false);
      });
    })
  }
};
