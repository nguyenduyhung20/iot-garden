const mqtt = require('mqtt');

const brokerUrl = 'mqtt://mqtt.ohstem.vn';
const username = 'IOTGARDEN222';
const password = '';

const client = mqtt.connect(brokerUrl, {
  username: username,
  password: password
});

client.on('connect', () => {
  console.log('Connected to Ohstem MQTT Broker');

  // Start generating fake data
  setInterval(generateFakeData, 5000); // Adjust the interval as needed
});

function generateFakeData() {
  const airTemperature = getRandomValue(20, 30);
  const airHumidity = getRandomValue(40, 60);
  const soilMoisture = getRandomValue(20, 40);
  const pumpStatus = Math.round(Math.random());

  // Publish fake data to MQTT broker
  client.publish('IOTGARDEN222/feeds/V3', JSON.stringify(airTemperature));
  client.publish('IOTGARDEN222/feeds/V4', JSON.stringify(airHumidity));
  client.publish('IOTGARDEN222/feeds/V5', JSON.stringify(soilMoisture));
  client.publish('IOTGARDEN222/feeds/V1', JSON.stringify(pumpStatus));

  console.log(`Published fake data: air_temperature=${airTemperature}, air_humid=${airHumidity}, soil_moisture=${soilMoisture}, pump=${pumpStatus}`);
}

function getRandomValue(min, max) {
  return Math.random() * (max - min) + min;
}

client.on('error', (error) => {
  console.error(`Error connecting to Ohstem MQTT Broker:`, error);
});

client.on('close', () => {
  console.log('Disconnected from Ohstem MQTT Broker');
});