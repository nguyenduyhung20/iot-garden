const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController')

router.get('/sensor-data/:gardenId', sensorController.getSensorData);
router.get('/soil-moisture/:gardenId', sensorController.getSoilMoistureData);
router.get('/dht20/:gardenId', sensorController.getDht20Data);
router.get('/water-pump/:gardenId', sensorController.getWaterPumpData);


module.exports = router;