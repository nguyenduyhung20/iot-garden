const db = require('./db');

const Garden = {
    getAllGardens: function() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_garden', (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },
    getGardenById: function(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_garden WHERE garden_ID = ?', [id], (err, result) => {
                if (err) reject(err);
                else resolve(result[0]);
            });
        });
    },
    getGardenByOwnerId: function(ownerId) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_garden WHERE garden_OwnerID = ?', [ownerId], (err, result) => {
                if (err) reject(err);
                else resolve(result[0]);
            });
        });
    },
    addGarden: function(garden) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO tbl_garden (garden_OwnerID, garden_Location, garden_Status, garden_Name, garden_Description, garden_Area, garden_Image) VALUES (?, ?, ?, ?, ?, ?, ?)', [garden.garden_OwnerID, garden.garden_Location, garden.garden_Status, garden.garden_Name, garden.garden_Description, garden.garden_Area, garden.garden_Image], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },
    deleteGarden: function(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM tbl_garden WHERE garden_ID = ?', [id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },
    updateGarden: function(id, garden) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE tbl_garden SET garden_Location = ?, garden_Status = ?, garden_Name = ?, garden_Description = ?, garden_Area = ?, garden_Image = ? WHERE garden_ID = ?', [garden.garden_Location, garden.garden_Status, garden.garden_Name, garden.garden_Description, garden.garden_Area, garden.garden_Image, id], (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }
};

module.exports = Garden;
