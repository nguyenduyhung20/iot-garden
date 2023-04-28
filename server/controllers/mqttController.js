const mqttModel = require('../models/mqttModel')
const sensorModel = require('../models/sensorModel')

const getLatestMessage = (req, res) => {
    const latestMessage = mqttModel.getLatestMessages();
    res.json({ message: latestMessage });
};

const startPump = (req, res) => {
    const { pump } = req.body;

    // Start the pump
    mqttModel.client.publish('IOTGARDEN222/feeds/V1', '1');
    console.log(`Pump ${pump} started`);

    // Wait for 5 second then stop the pump
    setTimeout(() => {
        mqttModel.client.publish('IOTGARDEN222/feeds/V1', '0');
        console.log(`Pump ${pump} stopped`);
    }, 10000);

    res.json({ message: 'Pump started' });
}


module.exports = {
    getLatestMessage,
    startPump,

};