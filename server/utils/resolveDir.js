const path = require('path');
const fs = require('fs');

const resolveDir = pathname => (size = 10) => (page = 1) => {
  return new Promise((resolve) => {
    const files = fs.readdirSync(pathname);
    const contentArr = files.map(n => require(path.join(pathname, n)));
    const splitContent = contentArr.slice(10 * (page - 1), size * page - 1);
    const totalPage = Math.ceil(contentArr.length / size);
    const nextPage = size * page < contentArr.length ? page + 1 : null;
    resolve({
      page,
      nextPage,
      totalPage,
      total: contentArr.length,
      items: splitContent,
    });
  });
};

module.exports = resolveDir;
