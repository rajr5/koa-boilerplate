// exports a reader method and a few helpers to
// read dirs with JS files
var fs   = require('fs');
var path = require('path');

function isJsFile(file) {
    return path.extname(file).toLowerCase() === ".js";
}
exports.isJsFile = isJsFile;

function isNotIndexFile(file) {
    return path.basename(file).toLowerCase() !== "index.js";
}
exports.isNotIndexFile = isNotIndexFile;

exports.readDir = function readDir(dir) {
    var files = fs
        .readdirSync(dir)
        .filter(isJsFile)
        .filter(isNotIndexFile);

    return files;
};
