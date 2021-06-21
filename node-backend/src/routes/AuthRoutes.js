const express = require('express');
const router = express.Router();



// ----- SIGN UP ----- //

router.post('/signup', (req, res) => {
    // try to signup
    console.log(req.body);
    res.send({
        authenticated: true,
        user: {
            id: 100,
            username: 'shamilsdq',
            token: 'shamilsdq.jwt.token'
        }
    });
});


// ----- SIGN IN ----- //

router.post('/signin', (req, res) => {
    // try to signin
    console.log(req.body);
    res.send({
        authenticated: true,
        user: {
            id: 100,
            username: 'shamilsdq',
            token: 'shamilsdq.jwt.token'
        }
    });
});



module.exports = router;