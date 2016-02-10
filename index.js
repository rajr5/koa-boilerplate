require('dotenv').config();

var koa = require('koa');
var logger = require('koa-logger');
var compress = require('koa-compress');
var responseTime = require('koa-response-time');

var config = require('config');
var db = require('./models');
var routers = require('./controllers');

// run the app...
app = koa();

// setup the app
app.use(logger());
app.use(responseTime());
app.use(compress());

routers.map(function(router) {
    app.use(router.routes());
});

// resync the db if needed
var setupDb;
if (config.db.sync) {
    setupDb = db.sequelize.sync({force: true});
}

Promise.resolve(setupDb)
.then(function() {
    app.listen(config.app.port);
});

console.log(
`Server is running on port ${config.app.port},
the environment is ${process.env.NODE_ENV},
this app instance is master ${process.env.MASTER}
running...`
 );
