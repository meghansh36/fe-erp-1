const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

passport.use(new LocalStrategy(
      {usernameField:"user", passwordField:"pass"},
        function (username, password, done) {
        if (username === 'foo' && password === 'bar') {
            done(null, true);
        } else {
            done(null, false);
        }
    }));
    

    module.exports = passport.initialize();