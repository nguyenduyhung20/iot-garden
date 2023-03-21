const db = require('../db');

const User = {
  getAllUsers: function(callback) {
    return db.query('SELECT * FROM tbl_user', callback);
  },
  getUserById: function(id, callback) {
    return db.query('SELECT * FROM tbl_user WHERE user_ID = ?', [id], callback);
  },
  addUser: function(user, callback) {
    return db.query('INSERT INTO tbl_user (user_Name, user_Username, user_Password, user_Address, user_Email, user_Phone) VALUES (?, ?, ?, ?, ?, ?)', [user.user_Name, user.user_Username, user.user_Password, user.user_Address, user.user_Email, user.user_Phone], callback);
  },
  deleteUser: function(id, callback) {
    return db.query('DELETE FROM tbl_user WHERE user_ID = ?', [id], callback);
  },
  updateUser: function(id, user, callback) {
    return db.query('UPDATE tbl_user SET user_Name = ?, user_Username = ?, user_Password = ?, user_Address = ?, user_Email = ?, user_Phone = ? WHERE user_ID = ?', [user.user_Name, user.user_Username, user.user_Password, user.user_Address, user.user_Email, user.user_Phone, id], callback);
  }
};

module.exports = User;