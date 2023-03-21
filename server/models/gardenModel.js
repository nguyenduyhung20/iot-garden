const db = require('./db');

const Garden = {
	getAllGardens: function(callback) {
		return db.query('SELECT * FROM tbl_garden', callback);
	},
	getGardenById: function(id, callback) {
		return db.query('SELECT * FROM tbl_garden WHERE garden_ID = ?', [id], callback);
	},
	getGardenByOwnerId: function(ownerId, callback) {
		return db.query('SELECT * FROM tbl_garden WHERE garden_OwnerID = ?', [ownerId], callback);
	},
	addGarden: function(garden, callback) {
		return db.query('INSERT INTO tbl_garden (garden_OwnerID, garden_Location, garden_Status, garden_name, garden_decl, garden_area, url) VALUES (?, ?, ?, ?, ?, ?, ?)', [garden.garden_OwnerID, garden.garden_Location, garden.garden_Status, garden.garden_name, garden.garden_decl, garden.garden_area, garden.url], callback);
	},
	deleteGarden: function(id, callback) {
		return db.query('DELETE FROM tbl_garden WHERE garden_ID = ?', [id], callback);
	},
	updateGarden: function(id, garden, callback) {
		return db.query('UPDATE tbl_garden SET garden_Location = ?, garden_Status = ?, garden_name = ?, garden_decl = ?, garden_area = ?, url = ? WHERE garden_ID = ?', [garden.garden_Location, garden.garden_Status, garden.garden_name, garden.garden_decl, garden.garden_area, garden.url, id], callback);
	}
};
	
/**
 * 
- `getAllGardens`: retrieves all records from the `tbl_garden` table.
- `getGardenById`: retrieves a record from the `tbl_garden` table by its `garden_ID`.
- `getGardenByOwnerId`: retrieves a record from the `tbl_garden` table by its `garden_OwnerID`.
- `addGarden`: adds a new record to the `tbl_garden` table with the given `garden_OwnerID`, `garden_Location`, `garden_Status`, `garden_name`, `garden_decl`, `garden_area`, and `url`.
- `deleteGarden`: deletes a record from the `tbl_garden` table by its `garden_ID`.
- `updateGarden`: updates a record in the `tbl_garden` table with the given `garden_ID`, `garden_Location`, `garden_Status`, `garden_name`, `garden_decl`, `garden_area`, and `url`.
 */
	
module.exports = Garden;