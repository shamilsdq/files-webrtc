const express = require('express');
const router = express.Router();



// GET TRANSFER HISTORY

router.get('/retrieve', (req, res) => {
    // retrieve transfer records
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


// ADD TRANSFER

router.post('/add', (req, res) => {
    // create new transfer record
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


// UPDATE TRANSFER

router.post('/update', (req, res) => {
    // update the transfer record
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