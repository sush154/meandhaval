var express = require('express'),
        registerMiddleware = express(),
        registerRouter = express.Router(),
        UserModel = require('../model/user');

registerRouter.use(function (req, res, next) {
    console.log('register middlew ware access');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

registerRouter.post('', function (req, res) {
    
    var newUser = new UserModel();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.email = req.body.email;
    newUser.phoneNumber = req.body.phoneNumber;
    newUser.password = req.body.password;
    console.log(newUser);
    newUser.save(function(err,user){
        if(err) return console.log(err);
        res.json({status:'200',message:"User successfully added"});
    });
});

registerMiddleware.use('/user/register', registerRouter);

module.exports = registerMiddleware;