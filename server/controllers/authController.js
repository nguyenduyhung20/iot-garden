const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')

const secret = 'doge';

const loginAuthenticate = (req, res) => {
    const {username, password} = req.body;
    userModel.getUserByUsername(username)
    .then(user => {
        if (!user) {
            return res.status(401).json({error: 'Unauthorized'});
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err || !result) {
                return res.status(401).json({ error: 'Unauthorized'});
            }
            const token = jwt.sign({id: user.user_ID, username: user.user_Username}, secret);
            res.json({token});
        });
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    });
}

const signUpAuthenticate = (req, res) => {
    const {name, username, password} = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.log(err);
            return res.status(500).json({error: 'Internal Server Error'});
        }
        userModel.createUser(user = {name, username, hash})
        .then(id => {
            const token = jwt.sign({id, username}, secret);
            res.json({token});
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: 'Internal Server Error'});
        });
    });
};

const getUserInfo = (req, res) => {
    res.json(req.user);
}

module.exports = {
    loginAuthenticate,
    signUpAuthenticate,
    getUserInfo
}