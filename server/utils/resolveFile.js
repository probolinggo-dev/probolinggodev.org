const path = require('path');
const fs = require('fs');

const resolveFile = pathname => slug => {
  return new Promise((resolve, reject) => {
    const files = fs.readdirSync(pathname);
    const objFiles = files.reduce((acc, item) => {
      const newObj = {};
      const result = require(path.join(pathname, item));
      const key = (item || '').replace(/\.js$/, '');
      newObj[key] = result;
      return { ...acc, ...newObj };
    }, {});
    if (!objFiles[slug]) {
      return reject(new Error({ code: 404, message: 'Not Found!' }));
    }

    return resolve(objFiles[slug]);
  });
};

module.exports = resolveFile;
