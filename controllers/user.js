var db = require('../models');
var router = require('koa-router')({prefix: '/user'});

router.get('/', function* getAllUsers() {
    var users = yield db.User.findAll();
    this.body = users;
});

module.exports = router;
