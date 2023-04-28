const express = require('express');
const router = express.Router();
const mqttController = require('../controllers/mqttController')

router.get('/latest-message', mqttController.getLatestMessage);

router.post('/startPump', mqttController.startPump);


module.exports = router;