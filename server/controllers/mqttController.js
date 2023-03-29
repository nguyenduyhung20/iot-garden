const mqttModel = require('../models/mqttModel')

const getLatestMessage = (req, res) => {
    const latestMessage = mqttModel.getLatestMessages();
    res.json({ message: latestMessage });
};

module.exports = {
    getLatestMessage
};