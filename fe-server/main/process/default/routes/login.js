var express = require('express');
var router = express.Router();
const passport = require('passport');

// router.post('/login',
//   passport.authenticate('local'),
//   function(req, res) {
//     res.json({
//         success:true,
//         message: 'Login seuccessful'
//     });
//   }
// );

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json({
      success:true,
      message: 'Login Failed' });
     }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.json({
        success:true,
        message: 'Login seuccessful'});
    });
  })(req, res, next);
});




router.get('/logout', function(req, res){
    if(req.isAuthenticated()){
      req.logout();
      res.json({
          success:true,
          message: 'Logout seuccessful'
      });
    }
  });

  

module.exports = router;
