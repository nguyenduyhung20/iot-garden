const db = require('./db')

const insertSoilMoisture = function(data) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tbl_soil_moisture (soil_moisture_Time, soil_moisture_Value, soil_moisture_GardenID) VALUE (?, ?, ?)';
        db.query(query, [data.timeStamp, data.value, data.gardenId], (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result.insertId);
            }
        });
    });
};

const insertDht20 = function(data) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tbl_dht20 (dht_Time, dht_Temp, dht_Humid, dht_GardenID) VALUE (?, ?, ?, ?)';
        db.query(query, [data.timeStamp, data.temp, data.humid, data.gardenId], (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result.insertId);
            }
        });
    });
};

const insertWaterPump = function(data) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tbl_water_pump (water_pump_Time, water_pump_Value, water_pump_GardenID) VALUE (?, ?, ?)';
        db.query(query, [data.timeStamp, data.value, data.gardenId], (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result.insertId);
            }
        });
    });
};

const getSensorDataByGardenId = function(gardenId) {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT
                s.soil_moisture_Time AS soil_moisture_Time,
                s.soil_moisture_Value AS soil_moisture_Value,
                d.dht_Time AS dht_Time,
                d.dht_Temp AS dht_Temp,
                d.dht_Humid AS dht_Humid,
                w.water_pump_Time AS water_pump_Time,
                w.water_pump_Value AS water_pump_Value
            FROM
                tbl_soil_moisture s
            JOIN tbl_dht20 d ON s.soil_moisture_GardenID = d.dht_GardenID
            JOIN tbl_water_pump w ON s.soil_moisture_GardenID = w.water_pump_GardenID
            WHERE
                s.soil_moisture_GardenID = ? AND d.dht_GardenID = ? AND w.water_pump_GardenID = ?`;
        db.query(query, [gardenId, gardenId, gardenId], (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = {
    insertSoilMoisture,
    insertDht20,
    insertWaterPump,
    getSensorDataByGardenId
}