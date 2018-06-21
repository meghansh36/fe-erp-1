var express = require('express');
var router = express.Router();
const passport = require('passport');


// router.post('/login', (req, res, next) => {
//     passport.authenticate('local', (err) => {
//         {
//             res.json({
//                 success: true,
//                 message: "Login Successful"
//             });
//         }
//     })(req, res, next);
// });

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.json({
        success:true,
        message: 'Login seuccessful'
    });
  }
);



router.get('/logout', function(req, res){
    req.logout();
    res.json({
        success:true,
        message: 'Logout seuccessful'
    });
  });

module.exports = router;
