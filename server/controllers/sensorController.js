const sensorModel = require('../models/sensorModel')

const sensorActions = {
    'pump': sensorModel.insertWaterPump,
    'soil_moisture': sensorModel.insertSoilMoisture
};

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

const getSoilMoistureData = async (req, res, next) => {
    try {
        gardenId = req.params.gardenId;
        limit = req.query.limit || 10;
        const data = await sensorModel.getSoilMoistureDataByGardenId(gardenId, limit);
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
}

const getDht20Data = async (req, res, next) => {
    try {
        gardenId = req.params.gardenId;
        limit = req.query.limit || 10;
        const data = await sensorModel.getDht20DataByGardenId(gardenId, limit);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}


const getWaterPumpData = async (req, res, next) => {
    try {
        gardenId = req.params.gardenId;
        limit = req.query.limit || 10;
        const data = await sensorModel.getWaterPumpDataByGardenId(gardenId, limit);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    insertSensorData,
    insertDht20Data,
    getSensorData,
    getSoilMoistureData,
    getDht20Data,
    getWaterPumpData
}