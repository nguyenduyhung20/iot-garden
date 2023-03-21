const express = require('express');
const router = express.Router();
const connection = require('../models/db')
const User = require('../models/userModel')

// Get all users
router.get('/users/getall', (req, res) => {
    // Send a query to the database to retrieve all rows from the tbl_user table
    User.getAllUsers((err, users, fields) => {
        // If there's an error, throw it
        if (err) {
            console.log('Error retrieving data from database:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Send the rows back to the client as a JSON object
            res.json({users});
        }
    });
});

router.get('/users/test', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});
// Get user by id
router.get('/users/get/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Finding id = ${id}`);
    User.getUserById(id, (err, user) => {
        if (err) {
            console.log('Error getting user:', err);
            res.status(500).json({error: 'Internal Server Error'});
        } else if (!user) {
            res.status(404).json({error: 'User not found'});
        } else {
            res.json(user);
        }
    });
});

// Add user
router.post('/users/add', (req, res) => {
    const user = req.body;
    User.addUser(user, (err, result) => {
        if (err){
            console.log('Error adding user:', err);
            res.status(500).json({error: 'Internal Server Error'});
        } else {
            res.json({message: 'User added successfully', id: result.insertID});
        }
    } );
});

// Delete user
router.delete('/users/delete/:id', (req, res) => {
    const id = req.params.id;
    User.deleteUser(id, (err, result) => {
        if (err) {
            console.log('Error deleting user:', err);
            res.status(500).json({error: 'Internal Server Error'});
        } else if (result.affectedRows === 0) {
            res.status(404).json({error: 'User not found'});
        } else {
            res.json({message: 'User deleted successfully'});
        }
    });
});

// Update user
router.put('/users/update/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    User.updateUser(id, user, (err, result) => {
        if (err) {
            console.log('Error updating user:', err);
            res.status(500).json({error: 'Internal Server Error'});
        } else if (result.affectedRows === 0) {
            res.status(404).json({error: 'User not found'});
        } else {
            res.json({message: 'User updated successfully'});
        }
    })
})

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

module.exports = router;