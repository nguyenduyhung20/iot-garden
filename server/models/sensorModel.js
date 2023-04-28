const db = require('./db')

const executeQuery = (query, param) => {
    console.log('i did come here');
    return new Promise((resolve, reject) => {
        console.log('i did come inside promise');
        db.query(query, param, (err, result) => {
            if (err) {
                console.log('i did come inside err');
                console.error(err);
                reject(err);
            } else {
                console.log('i did come inside result');
                console.log(result);
                resolve(result);
            }
        })
    })
}

// const insertSoilMoisture = function (data) {
//     const query = 'INSERT INTO tbl_soil_moisture (soil_moisture_Time, soil_moisture_Value, soil_moisture_GardenID) VALUE (?, ?, ?)';
//     executeQuery(query, [data.timeStamp, data.value, data.gardenId]);
// };

// const insertDht20 = function (data) {
//     const query = 'INSERT INTO tbl_dht20 (dht_Time, dht_Temp, dht_Humid, dht_GardenID) VALUE (?, ?, ?, ?)';
//     executeQuery(query, [data.timeStamp, data.temp, data.humid, data.gardenId]);
// };

// const insertWaterPump = function (data) {
//     const query = 'INSERT INTO tbl_water_pump (water_pump_Time, water_pump_Value, water_pump_GardenID) VALUE (?, ?, ?)';
//     executeQuery(query, [data.timeStamp, data.value, data.gardenId]);
// };

// const getSensorDataByGardenId = function (gardenId, limit) {
//     const query = `
//             SELECT
//                 s.soil_moisture_Time AS soil_moisture_Time,
//                 s.soil_moisture_Value AS soil_moisture_Value,
//                 d.dht_Time AS dht_Time,
//                 d.dht_Temp AS dht_Temp,
//                 d.dht_Humid AS dht_Humid,
//                 w.water_pump_Time AS water_pump_Time,
//                 w.water_pump_Value AS water_pump_Value
//             FROM
//                 tbl_soil_moisture s
//             JOIN tbl_dht20 d ON s.soil_moisture_GardenID = d.dht_GardenID
//             JOIN tbl_water_pump w ON s.soil_moisture_GardenID = w.water_pump_GardenID
//             WHERE
//                 s.soil_moisture_GardenID = ? AND d.dht_GardenID = ? AND w.water_pump_GardenID = ?
//             LIMIT ?`;
//     executeQuery(query, [gardenId, gardenId, gardenId, limit]);
// };


const insertSoilMoisture = function (data) {
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

const insertDht20 = function (data) {
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

const insertWaterPump = function (data) {
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

const getSensorDataByGardenId = function (gardenId, limit) {
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
                s.soil_moisture_GardenID = ? AND d.dht_GardenID = ? AND w.water_pump_GardenID = ?
            LIMIT ?`;
        db.query(query, [gardenId, gardenId, gardenId, limit], (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const getSoilMoistureDataByGardenId = function (gardenId, limit) {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT
                soil_moisture_Time,
                soil_moisture_Value
            FROM
                tbl_soil_moisture
            WHERE
                soil_moisture_GardenID = ?
            ORDER BY
                soil_moisture_Time DESC
            LIMIT ?`;
        db.query(query, [gardenId, limit], (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const getDht20DataByGardenId = function (gardenId, limit) {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT
                dht_Time,
                dht_Temp,
                dht_Humid
            FROM
                tbl_dht20
            WHERE
                dht_GardenID = ?
            ORDER BY
                dht_Time DESC
            LIMIT ?`;
        db.query(query, [gardenId, limit], (err, result) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

const getWaterPumpDataByGardenId = function (gardenId, limit) {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT
                water_pump_Time,
                water_pump_Value
            FROM
                tbl_water_pump
            WHERE
                water_pump_Value = 1 AND
                water_pump_GardenID = ?
            ORDER BY
                water_pump_Time DESC
            LIMIT ?`;
        db.query(query, [gardenId, limit], (err, result) => {
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
    getSensorDataByGardenId,
    getDht20DataByGardenId,
    getSoilMoistureDataByGardenId,
    getWaterPumpDataByGardenId
}