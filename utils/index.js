const path = require('path');
let regex = /^https?:/;

function getUrlName(url) {
  if (!url || !regex.test(url)) {
    return '';
  }
  let extname = path.extname(url);
  let basename = path.basename(url, extname);
  return basename;
}

module.exports = {
  getUrlName
}