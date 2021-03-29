var fs = require("fs");

module.exports = function fileReader(filename) {
  const file = fs.readFileSync(filename);
  settings = JSON.parse(file);
  return settings;
}