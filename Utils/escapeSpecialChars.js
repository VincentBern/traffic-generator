module.exports = function escapeEspcialChars(string) {
  return string.replace(/[!@#$%^&*()+=\-[\]\\';,./{}|":<>?~_]/g, "\\$&");
}
