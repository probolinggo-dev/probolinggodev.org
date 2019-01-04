const path = require('path');
const resolveFile = require('../../utils/resolveFile');

const resolveBySlug = resolveFile(path.join(__dirname, '../../contents/projects'));

module.exports = (_, args) => resolveBySlug(args.slug);
