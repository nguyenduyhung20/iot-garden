const gardenModel = require('../models/gardenModel')

const createDefaultGarden = (userId) => {
    return new Promise((resolve, reject) => {
        const defaultGarden = {
            garden_OwnerID: userId,
            garden_Location: 'Default location',
            garden_Name: 'Default Garden',
            garden_Description: 'Default',
            garden_Area: 0,
            url: 'Default'
        };
        gardenModel.addGarden(defaultGarden, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = {
    createDefaultGarden,
}