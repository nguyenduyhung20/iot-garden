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
        const query = 'INSERT INTO tbl_water_pump (water_pump_Time, water_pump_GardenID) VALUE (?, ?, ?, ?)';
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

module.exports = {
    insertSoilMoisture,
    insertDht20,
    insertWaterPump
}