const mqtt = require('mqtt');
const sensorController = require('../controllers/sensorController')

const brokerName = 'Ohstem MQTT Broker'

let latestMessages = {
    pump: null,
    air_temperature: null,
    air_humid: null,
    soil_moisture: null
};

let dhtBuffer = {
  air_temperature: null,
  air_humid: null
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
    const values = { timeStamp: timestamp, value: data, gardenId: 1};
    if (sensor == 'V1') {
      sensor = 'pump';
    } else if (sensor == 'V3') {
      sensor = 'air_temperature';
    } else if (sensor == 'V4') {
      sensor = 'air_humid';
    } else if (sensor == 'V5') {
      sensor = 'soil_moisture';
    }

    if (sensor === 'air_temperature' || sensor === 'air_humid') {
      dhtBuffer[sensor] = values;
      if (dhtBuffer.air_temperature && dhtBuffer.air_humid) {
        sensorController.insertDht20Data(dhtBuffer.air_temperature, dhtBuffer.air_humid)
        .then(insertId => {
          console.log(`Inserted DHT20 data with ID: ${insertId}`);
          dhtBuffer.air_temperature = null;
          dhtBuffer.air_humid = null;
        })
        .catch(err => console.error('Error inserting DHT20 data: ', err));
      }
    } else {
      sensorController.insertSensorData(sensor, values)
      .then(insertId =>  console.log(`Inserted ${sensor} data with ID: ${insertId}`))
      .catch(err => console.error(`Error inserting ${sensor} data: `, err))
    }

    latestMessages[sensor] = data;
    console.log('This is sensor ',sensor, ": ", data);

});

client.on('error', (error) => {
    console.error(`Error connecting to ${brokerName}:`, error);
});

module.exports = {
    getLatestMessages: ()=> latestMessages
};

