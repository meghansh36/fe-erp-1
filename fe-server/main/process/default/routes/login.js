var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/success', (req, res) => res.send("You have successfully logged in"));

router.get('/error', (req, res) => res.send("error logging in"));


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

module.exports = router;
