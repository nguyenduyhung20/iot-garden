/**
 *  This code creates an authentication middleware that checks if the JWT token 
 * is present in the request headers and verifies it using the secret key. 
 * If the token is valid, it decodes the payload and adds it to the request object. 
 * If the token is not present or invalid, it returns a 401 Unauthorized error. 
 * This middleware can be used to protect routes that require authentication.
 * */ 

const jwt = require('jsonwebtoken');

const secret = 'doge'; // Recommended secret is `h#J8$2kL@9!z`, but who the fuck care

function authenticate(req, res, next) {
    const token = req.header.authorization;
    if (!token) {
        return res.status(401).json({error: 'Unauthorized'});
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({error: 'Unauthorized'});
        }
        req.user = decoded;
        next();
    });
};

module.exports = authenticate;