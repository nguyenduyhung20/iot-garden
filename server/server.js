const express = require('express')
const userRouter = require('./routes/userRouter')
const mqttRouter = require('./routes/mqttRouter')
const authRouter = require('./routes/authRouter')
const sensorRouter = require('./routes/sensorRouter')
const conditionRouter = require('./routes/conditionRouter')
const gardenRouter = require('./routes/gardenRouter')
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Test api
app.get("/api/test", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});

// User router
app.use("/api/v1/users", userRouter);

// MQTT router
app.use("/", mqttRouter);

// Login SignUp route
app.use('/api/v1', authRouter);

// Sensor route
app.use('/api/v1', sensorRouter);

// Condition route
app.use('/api/v1/condition', conditionRouter);

// Garden route
app.use('/api/v1/gardens', gardenRouter);

const server = app.listen(PORT, () => { console.log(`Server started on port ${PORT} `) });