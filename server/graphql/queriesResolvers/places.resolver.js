const path = require('path');
const resolveDir = require('../../utils/resolveDir');

const getPlaces = resolveDir(path.join(__dirname, '../../contents/places'));

module.exports = (_, args) => getPlaces(args.size)(args.page);
