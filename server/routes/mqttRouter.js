const express = require('express');
const router = express.Router();
const mqttModel = require('../models/mqttModel');

router.get('/latest-message', (req, res) => {
    const latestMessage = mqttModel.getLatestMessages();
    res.json({ message: latestMessage });
  });

module.exports = router;