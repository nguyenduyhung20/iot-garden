const express = require('express');
const router = express.Router();
const connection = require('../models/db')
const User = require('../models/userModel')

// Test router
router.get('/users/test', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

// Get all users
router.get('/users/getall', (req, res) => {
    // Send a query to the database to retrieve all rows from the tbl_user table
    User.getAllUsers()
    .then(users => {
        res.json({users});
    })
    .catch(err => {
        console.log('Error retrieving data from database', err);
        res.status(500).json({ error: 'Internal Server Error'});
    });
});


// Get user by id
router.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Finding id = ${id}`);
    User.getUserById(id)
    .then(user => {
        if (!user) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(user);
        }
    })
    .catch(err => {
        console.log('Error getting user:', err);
        res.status(500).json({ error: 'Internal Server Error'});
    });

});

// Add user
router.post('/users/add', (req, res) => {
    const user = req.body;
    User.createUser(user)
    .then(result => {
        res.json({ message: 'User added successfully', id: result.insertId});
    })
    .catch(err => {
        console.log('Error adding user:', err);
        res.status(500).json({error: 'Internal Server Error'});
    });
});

// Delete user
router.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    User.deleteUser(id)
    .then( result => {
        if (result === 1) {
            res.json({message: 'User deleted successfully'});
        } else {
            res.status(404).json({error: 'User not found'});
        }
    })
    .catch (err => {
        console.log('Error deleting user: ', err);
        res.status(500).json({error: 'Internal Server Error'});
    });
});

// Update user
router.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    User.updateUser(id, user)
    .then(result => {
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json({ message: 'User updated successfully' });
        }
    })
    .catch(err => {
        console.log('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    });
})

// Get user by name
router.get('/users/getname/:name', (req, res) => {
    const name = req.params.name;
    User.getUserByName(name)
    .then(user => {
        if (!user) {
            res.status(404).json({error: 'User not found'});
        } else {
            res.json(user)
        }
    })
    .catch(err => {
        console.log('Error getting user:', err);
        res.status(500).json({error: 'Internal Server Error'});
    });
});

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