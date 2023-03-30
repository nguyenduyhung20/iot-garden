const User = require('../models/userModel')

const getAllUsers = (req, res) => {
    // Send a query to the database to retrieve all rows from the tbl_user table
    User.getAllUsers()
    .then(users => {
        res.json({users});
    })
    .catch(err => {
        console.log('Error retrieving data from database', err);
        res.status(500).json({ error: 'Internal Server Error'});
    });
};

const getUserById = (req, res) => {
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

}

const createUser = (req, res) => {
    const user = req.body;
    User.createUser(user)
    .then(result => {
        res.json({ message: 'User added successfully', id: result.insertId});
    })
    .catch(err => {
        console.log('Error adding user:', err);
        res.status(500).json({error: 'Internal Server Error'});
    });
}

const deleteUser = (req, res) => {
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
}

const updateUser = (req, res) => {
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
}

const getUserByUsername = (req, res) => {
    const name = req.params.name;
    User.getUserByUsername(name)
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
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    getUserByUsername
};