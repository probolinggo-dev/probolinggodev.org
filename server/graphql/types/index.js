const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname);
module.exports = files
  .filter(n => n !== 'index.js')
  .reduce((acc, item) => {
    const current = require(path.join(__dirname, item));
    return acc.concat(current);
  }, '');
