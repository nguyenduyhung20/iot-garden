const mqtt = require('mqtt');
//const connection = require('./models/db');

console.log('Setting up username and password!');
const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: 'dhung',
    password: 'aio_SsFq102rQATLTKKzL4Xg6w9IRTkL'
});

console.log('Connecting to Adafruit IO!');
client.on('connect', () => {
    console.log('Connected to Adafruit IO MQTT Broker');
    client.subscribe('dhung/feeds/testsensor');
});

client.on('message', (topic, message) => {
    console.log('This is topic:',topic,'\nThis is message:', message);
    const data = JSON.parse(message.toString());
    console.log('This is data:',data);
    const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log('This is timestamp:',timestamp);
    const values = { sensor: topic.split('/').pop(), value: data, timestamp};
    console.log('This is values:', values);
})

client.on('error', (error) => {
    console.error('Error connecting to Adafruit IO MQTT broker:', error);
  });
/**
 * This code connects to the Adafruit IO MQTT broker and subscribes to the feed.
 */