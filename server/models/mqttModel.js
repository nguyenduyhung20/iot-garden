require('dotenv').config();
const mqtt = require('mqtt');
const sensorController = require('../controllers/sensorController')

const brokerName = 'Broker Server';

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
const client = mqtt.connect(process.env.BROKER_LINK, {
	username: process.env.FEED_NAME,
	password: ''
});

console.log('Connecting to Ohstem!');
client.on('connect', () => {
	console.log('Connected to Ohstem MQTT Broker');
	client.subscribe(process.env.FEED_AIR_TEMP_NAME); // Air temperature
	client.subscribe(process.env.FEED_AIR_HUMID_NAME); // Air humid
	client.subscribe(process.env.FEED_SOIL_MOISTURE_NAME); // Soil moisture
	client.subscribe(process.env.FEED_PUMP_NAME); // Pump
	console.log('Subcribed');
});

client.on('message', (topic, message) => {

	const data = JSON.parse(message.toString());
	const timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
	let sensor = topic.split('/').pop();
	latestMessages[sensor] = data;
	const values = { timeStamp: timestamp, value: data, gardenId: 1 };
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
		//console.log('Data from DHT20')
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
		//console.log('Data from other sensor')
		sensorController.insertSensorData(sensor, values)
			.then(insertId => console.log(`Inserted ${sensor} data with ID: ${insertId}`))
			.catch(err => console.error(`Error inserting ${sensor} data: `, err))
	}

	latestMessages[sensor] = data;
	console.log('This is sensor ', sensor, ": ", data);

});

client.on('error', (error) => {
	console.error(`Error connecting to ${brokerName}:`, error);
});

module.exports = {
	getLatestMessages: () => latestMessages,
	client
};

