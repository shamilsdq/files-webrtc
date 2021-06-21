const express = require('express');
const router = express.Router();



// GET PROFILE DATA

router.get('/retrieve', (req, res) => {
    // retrieve profile data
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


// UPDATE PROFILE DATA

router.post('/update', (req, res) => {
    // update profile data
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