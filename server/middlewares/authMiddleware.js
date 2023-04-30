/**
 *  This code creates an authentication middleware that checks if the JWT token 
 * is present in the request headers and verifies it using the secret key. 
 * If the token is valid, it decodes the payload and adds it to the request object. 
 * If the token is not present or invalid, it returns a 401 Unauthorized error. 
 * This middleware can be used to protect routes that require authentication.
 * */

/**
 * req.user return:
 * {
    "id":,
    "username": "",
    "iat": <number>,
    "exp": <number>
}
 */

const jwt = require('jsonwebtoken');

const secret = 'doge'; // Recommended secret is `h#J8$2kL@9!z`, but who the fuck care

function authenticate(req, res, next) {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer ')) {
        // Remove bearer from string
        token = token.slice(7, token.length);
    }
    // console.log('Got token: ', token);
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            console.error(err);
            return res.status(401).json({ error: 'Unauthorized' });
        }
        req.user = decoded;
        console.log("This is user id: ", req.user.id);
        next();
    });
};

module.exports = authenticate;