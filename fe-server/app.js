var express = require('express');
const passport = require('passport');
var app = express();
var parser = require('body-parser');
var urlencodedParser = parser.urlencoded({extended : false});


app.use(passport.initialize());
app.use(passport.session());

app.get('/success', (req, res) => res.send("You have successfully logged in"));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

const LocalStrategy = require('passport-local').Strategy;

    passport.use(new LocalStrategy(
      {usernameField:"user", passwordField:"pass"},
        function (username, password, done) {
        if (username === 'foo' && password === 'bar') {
            done(null, true);
        } else {
            done(null, false);
        }
    }));


  app.post('/login',urlencodedParser,passport.authenticate('local'),function(req,res){
      res.redirect('/success');
  });

  app.get('/',function(req,res,next){
      res.sendFile('/Users/chiragbansal/Desktop/FlexiEle-Angular/fe-erp/fe-server/login.html');
  })

  app.listen(3020, function () {
      console.log("Express server listening on port 3020");
  });
