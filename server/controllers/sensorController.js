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

module.exports = {
    insertSensorData,
    insertDht20Data
}