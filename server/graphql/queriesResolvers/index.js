const path = require('path');
const fs = require('fs');

const files = fs.readdirSync(__dirname);
module.exports = files
  .filter(n => n !== 'index.js')
  .reduce((acc, item) => {
    const newObj = {};
    const current = require(path.join(__dirname, item));
    const key = (item || '').replace(/\.resolver\.js$/, '');
    newObj[key] = current;
    return { ...acc, ...newObj };
  }, {});
