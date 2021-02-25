var fs = require("fs");

module.exports = function (filename) {
  const file = fs.readFileSync(filename);
  settings = JSON.parse(file);
  return settings;
}