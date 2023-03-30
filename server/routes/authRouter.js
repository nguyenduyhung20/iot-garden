const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const authenticate = require('../middlewares/authMiddleware')

// Lil test do not hurt ei ?
router.get('/test', (req, res) => {
    res.json({value: 'Hallo'});
})

// Login 
router.post('/login', authController.loginAuthenticate);

// Sign Up
router.post('/signup', authController.signUpAuthenticate);

// Get user info
router.get('/user', authenticate, authController.getUserInfo);


module.exports = router;