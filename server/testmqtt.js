const mqtt = require('mqtt');

// const client = mqtt.connect('mqtt://io.adafruit.com', {
//   username: 'dhung',
//   password: 'aio_SsFq102rQATLTKKzL4Xg6w9IRTkL'
//   // username: 'demo',
//   // password: ''
// });


// // sent data
// client.on('connect', () => {
//   console.log('Connected to Adafruit IO MQTT broker');
//   setInterval(() => {
//     const temperature = 35 - Math.floor(Math.random() * 5);
//     const data = JSON.stringify({ value: temperature });
//     client.publish('dhung/feeds/testsensor', data);
//     console.log(`Sent temperature data: ${temperature}`);
//   }, 5000);
// });

const client = mqtt.connect('mqtt://mqtt.ohstem.vn', {
    username: 'IOTGARDEN222',
    password: ''
});

console.log('Connecting to Adafruit IO!');
client.on('connect', () => {
    console.log('Connected to Adafruit IO MQTT Broker');
    client.subscribe('IOTGARDEN222/feeds/V3'); // Air temperature
    client.subscribe('IOTGARDEN222/feeds/V4'); // Air humid
    client.subscribe('IOTGARDEN222/feeds/V5'); // Soil moisture
    client.subscribe('IOTGARDEN222/feeds/V1'); // Pump
    console.log('Subcribed');
});

// // sent data
// client.on('connect', () => {
//   console.log('Connected to Adafruit IO MQTT broker');
//   setInterval(() => {
//     const temperature = 70 - Math.floor(Math.random() * 5);
//     const data = JSON.stringify({ value: temperature });
//     client.publish('V3', data);
//     console.log(`Sent temperature data: ${temperature}`);
//   }, 5000);
// });

client.on('message', (topic, message) => {
  const data = JSON.parse(message.toString());
  const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
  let sensor = topic.split('/').pop();
  const values = { sensor: sensor, value: data, timestamp};
  if (sensor == 'V1') {
    sensor = 'Pump';
  } else if (sensor == 'V3') {
    sensor = 'Air temperature';
  } else if (sensor == 'V4') {
    sensor = 'Air humid';
  } else if (sensor == 'V5') {
    sensor = 'Soil moisture';
  }
  console.log('This is sensor:',sensor);
  console.log('This is data:',data);
  //console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

client.on('error', (error) => {
  console.error('Error connecting to Adafruit IO MQTT broker:', error);
});