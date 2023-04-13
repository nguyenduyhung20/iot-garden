const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')
const gardenController = require('../controllers/gardenController')

const secret = 'doge';

const loginAuthenticate = (req, res) => {
    console.log('Received login')
    const {username, password, rememberMe} = req.body;
    console.log('Received body with: ', username, password)
    userModel.getUserByUsername(username)
    .then(user => {
        if (!user) {
            console.log('Nah, not user')
            return res.status(401).json({error: 'Unauthorized'});
        }
        console.log('Got user')
        bcrypt.compare(password, user.user_Password, (err, result) => {
            console.log('Comparing...')
            if (err || !result) {
                console.log('Different password')
                return res.status(401).json({ error: 'Unauthorized'});
            }
            // Set token expiration time based on rememberMe value
            const expiresIn = rememberMe ? '30d' : '1h';
            const token = jwt.sign({id: user.user_ID, username: user.user_Username}, secret, {expiresIn});
            res.json({token});
            console.log('Compare finish')
        });
        
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    });
}

const signUpAuthenticate = (req, res) => {
    console.log('Received signup')
    const {name, username, password} = req.body;
    console.log(name, username, password)
    // Check for existing username
    userModel.getUserByUsername(username)
    .then((existingUser) => {
        if (existingUser) {
            console.log('Username already exists')
            return res.status(400).json({error: 'Username already exists'})
        }
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                console.log(err);
                return res.status(500).json({error: 'Internal Server Error'});
            }
            console.log('Hashing...')
            userModel.createUser(name, username, hash)
            .then(id => {
                console.log('Creating garden')
                return gardenController.createDefaultGarden(id)
                .then(() => {
                    const token = jwt.sign({id, username}, secret);
                    res.json({token});
                });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({error: 'Internal Server Error'});
            });
            console.log('User created')
        })
    })
    .catch((error) => {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
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