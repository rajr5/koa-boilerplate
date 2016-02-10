/**
* Entry point for models, will load all other models
* and export db object which contains all models and
* sequelize references
*
* @todo: Enable some kind of model overloading
* so all the models can have an automatically attached
* property, method and/or hook. Like for example
* automatic persisting of createdBy, updatedBy etc.
*/
var Sequelize = require('sequelize');
var path = require('path');
var config = require('config');
var reader = require('../utils/reader');

var db = {};

console.log(`db options:
    db: ${config.db.database}
    un: ${config.db.username}
    pw: ${config.db.password}
`)
var sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password || undefined, {
        dialect: config.db.dialect,
        host: config.db.host,
        port: config.db.port,
        loggging: config.db.logging
});

/**
 * Takes a read file and passes it to sequelize import
 * Puts all references inside a DB object for easy getting
 *
 * @param  {String} file read model file definition
 * @return {array}      returns array of models
 */
function loadModel(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;

    return model;
}

// read all the models inside the models/ directory and load them
reader.readDir(__dirname).map(loadModel);

/**
 * Make an association to the DB object,
 * not really sure what's this for
 *
 * @param  {string} modelName Name of the model
 */
function makeAssociation(modelName) {
    if (typeof db[modelName].associate === 'function') {
        db[modelName].associate(db);
    }
}

Object.keys(db).map(makeAssociation);

// export references to sequelize
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
