const mqtt = require('mqtt');

let latestMessages = {
    pump: null,
    air_temperature: null,
    air_humid: null,
    soil_moisture: null
};


console.log('Setting up username and password!');
const client = mqtt.connect('mqtt://mqtt.ohstem.vn', {
    username: 'IOTGARDEN222',
    password: ''
});

console.log('Connecting to Ohstem!');
client.on('connect', () => {
    console.log('Connected to Ohstem MQTT Broker');
    client.subscribe('IOTGARDEN222/feeds/V3'); // Air temperature
    client.subscribe('IOTGARDEN222/feeds/V4'); // Air humid
    client.subscribe('IOTGARDEN222/feeds/V5'); // Soil moisture
    client.subscribe('IOTGARDEN222/feeds/V1'); // Pump
    console.log('Subcribed');
});

client.on('message', (topic, message) => {

    const data = JSON.parse(message.toString());
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let sensor = topic.split('/').pop();
    latestMessages[sensor] = data;
    const values = { sensor: sensor, value: data, timestamp};
    if (sensor == 'V1') {
      sensor = 'pump';
    } else if (sensor == 'V3') {
      sensor = 'air_temperature';
    } else if (sensor == 'V4') {
      sensor = 'air_humid';
    } else if (sensor == 'V5') {
      sensor = 'soil_moisture';
    }
    latestMessages[sensor] = data;
    console.log('This is sensor:',sensor);
    console.log('This is data:',data);
    // console.log('This is timestamp:',timestamp);
    // console.log('This is values:', values);
});

client.on('error', (error) => {
    console.error('Error connecting to Adafruit IO MQTT broker:', error);
});

module.exports = {
    getLatestMessages: ()=> latestMessages
};


/**
 * This code connects to the Adafruit IO MQTT broker and subscribes to the feed.
 */