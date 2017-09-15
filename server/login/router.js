var express = require('express'),
        credMiddleware = express(),
        credRouter = express.Router();
var passport = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var UserModel = require('../model/user');
passport.serializeUser(function(user, done) {
        done(null, user._id);
    });
passport.deserializeUser(function(_id, done) {
        UserModel.findById(_id, function(err, user) {
            done(err, user);
        });
    });
 passport.use('local-login',new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        session: true
    },
  function(email, password, done) {
    UserModel.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!(user.password === password)) { return done(null, false); }
      return done(null, user);
    });
  }
));
credRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

credRouter.use(cookieParser());
credRouter.use(session({ secret: 'secretkey', cookie: { httpOnly: false,secure:false,expires: new Date(Date.now() + (300 * 1000))} })); // session secret
credRouter.use(passport.initialize());
credRouter.use(passport.session());

credRouter.post('', function(req, res,next) {
    console.log(req.session);
    passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.status(401).json({status:'401'}); }
	res.cookie('token',Math.random().toString(), { httpOnly: false,secure:false,expires: new Date(Date.now() + (300 * 1000))});
    res.json({status:'200',data:{message:"User successfully logged in",user:{_id:user._id}}});
  })(req, res, next);
  });

credMiddleware.use('/user/login', credRouter);

module.exports = credMiddleware;