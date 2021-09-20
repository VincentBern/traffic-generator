const _cssToXpath = require('css-to-xpath');

module.exports = function cssToXpath(cssSelector) {
  return _cssToXpath(cssSelector.trim()).substring(1);
};
