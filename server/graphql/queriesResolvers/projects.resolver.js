const path = require('path');
const resolveDir = require('../../utils/resolveDir');

const getProjects = resolveDir(path.join(__dirname, '../../contents/projects'));

module.exports = (_, args) => getProjects(args.size)(args.page);
