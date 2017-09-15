var     express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        connection = require('./connection'),
        credMiddleWare = require('./login/router');
        registerMiddleWare = require('./register/router');
        userMiddleWare = require('./user/router');
app.use(bodyParser.json());
app.use('/',[credMiddleWare,registerMiddleWare,userMiddleWare]);
module.exports = app;

