module.exports = function(sequelize, DataType) {
    var User = sequelize.define('User', {
        email: DataType.STRING,
        firstName: DataType.STRING,
        lastName: DataType.STRING,
        fullName: DataType.STRING,  // calculated and persisted for searching through SQL
        // ...
    }, {
        tableName: 'user',

        classMethods: {
            associate: (models) => {
                // nothing for now
            }
        },

        instanceMethods: {
            name: getName
        },

        hooks: {
            beforeCreate: beforeCreate,
            beforeUpdate: beforeUpdate
        }
    });

    return User;
}

// Class methods


// Instance methods

function getName() {
    return this.fullName;
}

// Hooks

function beforeUpdate(next) {
    setFullName(this);

    next();
}

function beforeCreate(next) {
    setFullName(this);

    next();
}

// Set the user's full name, enables easier searching in SQL
function setFullName(user) {
    user.fullName = `${user.firstName} ${user.lastName}`;
}
