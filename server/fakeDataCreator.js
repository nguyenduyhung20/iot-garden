const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://io.adafruit.com', {
  username: 'dhung',
  password: 'aio_SsFq102rQATLTKKzL4Xg6w9IRTkL'
});

client.on('connect', () => {
  console.log('Connected to Adafruit IO MQTT broker');
  setInterval(() => {
    const temperature = 35 - Math.floor(Math.random() * 5);
    const data = JSON.stringify({ value: temperature });
    client.publish('dhung/feeds/testsensor', data);
    console.log(`Sent temperature data: ${temperature}`);
  }, 5000);
});

client.on('error', (error) => {
  console.error('Error connecting to Adafruit IO MQTT broker:', error);
});