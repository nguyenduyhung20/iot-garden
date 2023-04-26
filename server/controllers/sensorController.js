const sensorModel = require('../models/sensorModel')

const sensorActions = {
    'pump': sensorModel.insertWaterPump,
    'soil_moisture': sensorModel.insertSoilMoisture
};

const insertSensorData = (sensor, values) => {

    if (sensorActions[sensor]) {
        return sensorActions[sensor](values);
    } else {
        return Promise.reject(new Error(`Unknown sensor type: ${sensor}`));
    }
}

const insertDht20Data = (tempValue, humidValue) => {
    return sensorModel.insertDht20({ ...tempValue, temp: tempValue.value, humid: humidValue.value });
};

const getSensorData = (req, res) => {
    const gardenId = req.params.gardenId;
    if (isNaN(gardenId)) {
        return res.status(400).json({ error: 'Invalid garden ID' });
    }
    const limit = parseInt(req.query.limit) || 10;
    if (isNaN(limit) || limit <= 0) {
        return res.status(400).json({ error: 'Invalid limit value' });
    }
    sensorModel.getSensorDataByGardenId(gardenId, limit)
        .then(sensorData => {
            res.json(sensorData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching sensor data' })
        });
}

module.exports = {
    insertSensorData,
    insertDht20Data,
    getSensorData
}