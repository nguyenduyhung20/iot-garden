const db = require('./db');

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

const createCondition = (data) => {
    const query = `INSERT INTO tbl_condition
    (condition_Amdat, condition_Light, condition_Temp, condition_Humid, condition_GardenID)
    VALUES (?, ?, ?, ?, ?)`;
    return executeQuery(query, [
        data.amdat,
        data.light,
        data.temp,
        data.humid,
        data.gardenId
    ]);
};

const getConditionByGardenId = (gardenId) => {
    const query = 'SELECT * FROM tbl_condition WHERE condition_GardenID = ?';
    return executeQuery(query, [gardenId]);
}

const updateCondition = (data) => {
    const query = `UPDATE tbl_condition
    SET condition_Amdat = ?, condition_Light = ?, condition_Temp = ?, condition_Humid = ?
    WHERE condition_GardenID = ?
    `;
    return executeQuery(query, [
        data.amdat,
        data.light,
        data.temp,
        data.humid,
        data.gardenId
    ]);
};

const deleteCondition = (gardenId) => {
    const query = 'DELETE FROM tbl_condition WHERE condition_GardenID = ?';
    return executeQuery(query, [gardenId]);
};

module.exports = {
    createCondition,
    getConditionByGardenId,
    updateCondition,
    deleteCondition
};