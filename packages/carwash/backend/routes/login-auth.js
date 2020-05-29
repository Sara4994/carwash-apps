const express = require('express');
const users = require('../models/valid-users');

const router = express.Router();

router.post('/auth', (req, res, next) => {
    // console.log(users);
    let user = users.filter((user) => {
        // console.log(req.body.email, user.name, req.body.password, user.password);
        return user.email == req.body.email && user.password == req.body.password;
    });
    console.log(user);
    if(user.length) {
        res.status(200).json({messages: 'successful'});
    } else {
        res.status(401).json({messages: 'unsuccessful'});
    }  
});

router.post('/adduser', (req, res, next) => {
    // console.log(users);
    let user = users.filter((user) => {
        // console.log(req.body.email, user.name, req.body.password, user.password);
        return user.email == req.body.email && user.password == req.body.password;
    });
    console.log(user);
    if(user.length) {
        res.status(200).json({messages: 'User Already exists'});
    } else {
        users.push({email: req.body.email, password: req.body.password})
        res.status(401).json({messages: 'unsuccessful'});
    }
})

module.exports = router;