var express = require('express');
var router = express.Router();
const passport = require('passport');


router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err) => {
        if (err) {
            console.error(err);
            return res.json({
                success: false,
                message: err.message
            });
        } else {
            res.json({
                success: true,
                message: "Login Successful"
            });
        }
    })(req, res, next);
});


router.get('/logout', function(req, res){
    req.logout();
    res.json({
        success:true,
        message: 'Logout seuccessful'
    });
  });

module.exports = router;
