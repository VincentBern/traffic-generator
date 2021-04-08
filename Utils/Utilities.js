const fileReader = require('./fileReader');
const cssToXpath = require('./cssToXpath');
const SelectorExtract = require('./SelectorExtract');
const escapeSpecialChars = require('./escapeSpecialChars');

module.exports = utilities = {
  fileReader,
  cssToXpath,
  SelectorExtract,
  escapeSpecialChars
};