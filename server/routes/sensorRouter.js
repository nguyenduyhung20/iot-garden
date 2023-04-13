const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController')

router.get('/sensor-data/:gardenId', sensorController.getSensorData);

module.exports = router;