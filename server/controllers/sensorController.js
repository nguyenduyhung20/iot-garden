const sensorModel = require('../models/sensorModel')

const insertSensorData = (sensor, values) => {
    if (sensor === 'pump') {
        return sensorModel.insertWaterPump(values)
    } else if (sensor === 'soil_moisture') {
        return sensorModel.insertSoilMoisture(values)
    } else {
        return Promise.reject(new Error(`Unknown sensor type: ${sensor}`));
    }
}

const insertDht20Data = (tempValue, humidValue) => {
    return sensorModel.insertDht20({...tempValue, temp: tempValue.value, humid: humidValue.value});
};

const getSensorData = (req, res) => {
    const gardenId = req.params.gardenId;
    const limit = parseInt(req.query.limit) || 10;

    sensorModel.getSensorDataByGardenId(gardenId, limit)
    .then(sensorData => {
        res.json(sensorData);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({error: 'An error occurred while fetching sensor data'})
    });
}

module.exports = {
    insertSensorData,
    insertDht20Data,
    getSensorData
}