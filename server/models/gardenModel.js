const db = require('./db');
/**
 * result: 
 * {
  "garden_ID": 1,
  "garden_OwnerID": 123,
  "garden_Location": "123 Main Street",
  "garden_Status": "Active",
  "garden_Name": "My Garden",
  "garden_Description": "A beautiful garden with lots of flowers.",
  "garden_Area": 500,
  "garden_Image": "https://example.com/garden.jpg"
}
 */
const executeQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const Garden = {
    getAllGardens: function () {
        return executeQuery('SELECT * FROM tbl_garden');
    },
    getGardenById: function (id) {
        return executeQuery('SELECT * FROM tbl_garden WHERE garden_ID = ?', [id]).then(results => results[0]);
    },
    getGardenByOwnerId: function (ownerId) {
        return executeQuery('SELECT * FROM tbl_garden WHERE garden_OwnerID = ?', [ownerId]).then(results => results[0]);
    },
    addGarden: function (garden) {
        return executeQuery('INSERT INTO tbl_garden (garden_OwnerID, garden_Location, garden_Status, garden_Name, garden_Description, garden_Area, garden_Image) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
                garden.garden_OwnerID,
                garden.garden_Location,
                garden.garden_Status,
                garden.garden_Name,
                garden.garden_Description,
                garden.garden_Area,
                garden.garden_Image
            ]);
    },
    deleteGarden: function (id) {
        return executeQuery('DELETE FROM tbl_garden WHERE garden_ID = ?', [id]);
    },
    updateGarden: function (id, garden) {
        return executeQuery('UPDATE tbl_garden SET garden_Location = ?, garden_Status = ?, garden_Name = ?, garden_Description = ?, garden_Area = ?, garden_Image = ? WHERE garden_ID = ?',
            [
                garden.garden_Location,
                garden.garden_Status,
                garden.garden_Name,
                garden.garden_Description,
                garden.garden_Area,
                garden.garden_Image,
                id
            ]);
    }
};

module.exports = Garden;
