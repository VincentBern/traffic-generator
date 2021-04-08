const { cssToXpath } = require('../Utils/Utilities');

/**
 * Clicks on an element using xpath
 * @param  {[string]} SelectorResultXpath Selector string containing xpath value
 * @param  {[string]} index if multiple elements under the same selector, set the index of value
 * @return {[Promise]} true if click was successful, false if it wasn't
 */

module.exports = class CoveoClick {

  async clickXpath(SelectorResultXpath, index = 1) {

    // safety in case of wrong index input
    index = (typeof index !== 'number' || index < 1) ? 1 : index;

    return new Promise(async (res) => {
      return await this.api.execute(function (SelectorResultXpath, index) {
        return new Promise(async (executeResolve) => {

          // Get element by xpath inside broswer
          function getElementByXpath(path) {
            return document.evaluate(path, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
          }

          function isDescendant(parent, child) {
            var node = child.parentNode;
            while (node != null) {
              if (node == parent) {
                return true;
              }
              node = node.parentNode;
            }
            return false;
          }

          // Check if item was indeed clicked
          var wasClicked = false;
          // Selector Node for expath
          var xpathResult = getElementByXpath(SelectorResultXpath);

          let selector = null;
          let counter = 1;

          while (!selector) {
            if (index === counter) {
              selector = xpathResult.iterateNext();
            } else {
              xpathResult.iterateNext()
            }
            counter++;
          }

          let possibleChild = xpathResult.iterateNext();

          console.log('selector', selector);
          console.log('possibleChild', possibleChild);

          if (possibleChild) {
            if (isDescendant(selector, possibleChild)) {
              selector = possibleChild;
            }
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

  async command(selector, index = 1, use = 'xpath') {
    return await this.clickXpath(use === 'css' ? cssToXpath(selector) : selector, index);
  }
};
