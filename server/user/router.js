var express = require('express'),
        userMiddleware = express(),
        userRouter = express.Router();
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var UserModel = require('../model/user');

userRouter.use(cookieParser());
userRouter.use(session({ secret: 'secretkey', cookie: { httpOnly: false,secure:false,expires: new Date(Date.now() + (300 * 1000))} }));

userRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if((req.session.cookie._expires > (new Date())) && req.cookies['token']){
        next();
    } else {
        res.cookie("token", "", { expires: new Date() });
        res.status(401).json({status:'401',data:{message:'Session has expired.'}});
    }
    
    
});


userRouter.get('/:id', function(req, res,next) {
    console.log(req.params.id);
    UserModel.findOne({'_id': req.params.id }, function (err, doc) {
    doc = doc.toObject();
    delete doc.password;
	res.json(
                {status:'200',
                    data:{
                        user:doc
                    }
                }
            );
	});    
});

userMiddleware.use('/user', userRouter);

module.exports = userMiddleware;