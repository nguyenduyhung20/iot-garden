const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


// Test router
router.get('/test', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

// Get all users
router.get('/getall', userController.getAllUsers);


// Get user by id
router.get('/:id', userController.getUserById);

// Create user
router.post('/create', userController.createUser);

// Delete user
router.delete('/:id', userController.deleteUser);

// Update user
router.put('/:id', userController.updateUser)

// Get user by name
router.get('/getname/:name', userController.getUserByUsername);


module.exports = router;

/** This is inside the result object
 * {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 1,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
 */
