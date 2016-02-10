// Module will read all the routes inside the controllers and
// export them so they can be consumed by the app
var reader = require('../utils/reader');
var path = require('path');

var routers = reader.readDir(__dirname).map(function(file) {
    return require(path.join(__dirname, file));
});

// intro screen router

routers.push();

module.exports = routers;
