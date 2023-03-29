const db = require('./db');

// Old style
// const User = {
// 	getAllUsers: function(callback) {
// 		return db.query('SELECT * FROM tbl_user', callback);
// 	},
// 	getUserById: function(id, callback) {
// 		return db.query('SELECT * FROM tbl_user WHERE user_ID = ?', [id], callback);
// 	},
// 	addUser: function(user, callback) {
// 		return db.query('INSERT INTO tbl_user (user_Name, user_Username, user_Password, user_Address, user_Email, user_Phone) VALUES (?, ?, ?, ?, ?, ?)', [user.user_Name, user.user_Username, user.user_Password, user.user_Address, user.user_Email, user.user_Phone], callback);
// 	},
// 	deleteUser: function(id, callback) {
// 		return db.query('DELETE FROM tbl_user WHERE user_ID = ?', [id], callback);
// 	},
// 	updateUser: function(id, user, callback) {
// 		return db.query('UPDATE tbl_user SET user_Name = ?, user_Username = ?, user_Password = ?, user_Address = ?, user_Email = ?, user_Phone = ? WHERE user_ID = ?', [user.user_Name, user.user_Username, user.user_Password, user.user_Address, user.user_Email, user.user_Phone, id], callback);
// 	},
// 	getUserByName: function(name, callback) {
// 		return db.query('SELECT * FROM tbl_user WHERE user_Username = ?', callback);
// 	}
// };

const User = {
	getAllUsers: function() {
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM tbl_user', (err, rows) => {
				if (err) {
					reject(err);
				} else {
					resolve(rows);
				}
			});
		});
	},
	getUserById: function(id) {
		// return db.query('SELECT * FROM tbl_user WHERE user_ID = ?', [id], callback);
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM tbl_user WHERE user_ID = ?', id, (err, rows) => {
				if (err) {
					reject(err);
				} else {
					resolve(rows[0]);
				}
			});
		});
	},
	// this add too fucked up, not using it
	// addUser: function(user, callback) {
	// 	// return db.query('INSERT INTO tbl_user (user_Name, user_Username, user_Password, user_Address, user_Email, user_Phone) VALUES (?, ?, ?, ?, ?, ?)', [user.user_Name, user.user_Username, user.user_Password, user.user_Address, user.user_Email, user.user_Phone], callback);
	// 	return new Promise((resolve, reject) => {
	// 		db.query('INSERT INTO tbl_user (user_Name, user_Username, user_Password, user_Address, user_Email, user_Phone) VALUES (?, ?, ?, ?, ?, ?)',
	// 		[user.user_Name, user.user_Username, user.user_Password, user.user_Address, user.user_Email, user.user_Phone],
	// 		(err, rows) => {
	// 			if (err) {
	// 				reject(err);
	// 			} else {
	// 				resolve(result.affectedRows);
	// 			}
	// 		});
	// 	});
	// },

	deleteUser: function(id) {
		// return db.query('DELETE FROM tbl_user WHERE user_ID = ?', [id], callback);
		return new Promise((resolve, reject) => {
			db.query('DELETE FROM tbl_user WHERE user_ID = ?', [id], 
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result.affectedRows);
				}
			});
		});
	},
	updateUser: function(id, user) {
		// return db.query('UPDATE tbl_user SET user_Name = ?, user_Username = ?, user_Password = ?, user_Address = ?, user_Email = ?, user_Phone = ? WHERE user_ID = ?', [user.user_Name, user.user_Username, user.user_Password, user.user_Address, user.user_Email, user.user_Phone, id], callback);
		return new Promise((resolve, reject) => {
			db.query('UPDATE tbl_user SET user_Name = ?, user_Username = ?, user_Password = ?, user_Address = ?, user_Email = ?, user_Phone = ? WHERE user_ID = ?'),
			[user.user_Name, user.user_Username, user.user_Password, user.user_Address, user.user_Email, user.user_Phone, id],
			(err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result.affectedRows);
				}
			};
		});
	},
	getUserByUsername: function(name) {
		// return db.query('SELECT * FROM tbl_user WHERE user_Username = ?', callback);
		return new Promise((resolve, reject) => {
			db.query('SELECT * FROM tbl_user WHERE user_Username = ?', [name], (err, rows) => {
				if (err) {
					reject(err);
				} else {
					resolve(rows[0]);
				}
			});
		});
	},
	createUser: function (user) {
		console.log(user.user_Name, user.user_Username, user.user_Password);
		return new Promise((resolve, reject) => {
			db.query('INSERT INTO tbl_user (user_Name, user_Username, user_Password) VALUES (?, ?, ?)', [user.user_Name, user.user_Username, user.user_Password],
			(err, result) => {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					console.log(result);
					resolve(result.insertId);
				}
			});
		});
	}
};


module.exports = User;