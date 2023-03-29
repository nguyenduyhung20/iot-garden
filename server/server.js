const express = require('express')
const userRouter = require('./routes/userRouter')
const mqttRouter = require('./routes/mqttRouter')
const authRouter = require('./routes/authRouter')
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Test api
app.get("/api/test", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

// User router
app.use("/api/v1/users", userRouter);

//Test MQTT 
app.use("/", mqttRouter);

// Login SignUp route
app.use('/api/v1', authRouter);

const server = app.listen(PORT, () => {console.log( `Server started on port ${PORT} `)});