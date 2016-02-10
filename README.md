# Basic Koa Sequelize boilerplate (WIP)

This is a basic boilerplate project containing which includes Koa framework and Sequelize ORM. It is still a work in progress and is subject to heavy change.

## Directory structure
```bash
boilerplate
├── config
│   ├── default.yaml        # common config for all environments (this is present by default)
│   ├── development.json    # config for development environments (not created and is ignored by git)
│   ├── production.json     # config for production environments (not created and is ignored by git)
├── controllers
│   ├── index.js            # file that requires all controllers and exposes a router array
│   └── users.js            #  example  of a controller, you can use it as a starting point.
├── migrations              # migrations directory with an example migration. generated with "sequelize-cli"
│   └── 20141021121205-create-user.js
├── models
│   ├── index.js            # generated with "sequelize init". requires all models.
│   └── user.js             # an example model. generated with "sequelize-cli model:create"
├── package.json
├── plugins
│   └── index.js            # register plugins. add your custom plugins in this folder as well.
├── README.md
└── index.js               
```
```bash
boilerplate
├── README.md
├── config
│   ├── default.yaml        # common config for all environments (this is present by default, you can additionaly create development.yaml, production.yaml etc.)
├── controllers
│   ├── index.js            # file that requires all controllers and exposes a router array
│   └── user.js
├── index.js                # entry point of the app
├── models
│   ├── index.js            # file that requires all the models and exposes a db object
│   └── user.json           # example of a model
├── nodemon.json            # nodemon configuration
├── package.json
├── public
│   └── index.html          # basic html template
└── utils
    └── reader.js           # helper for reading directories
```
## Todo
- add basic authentication
- solve logging
- write tests
- write more models/controllers
- write a basic seed/migrate file, remove the forcefull sync inside *models/index.js*
- ...
