const express = require('express')
// const userRouter = require('./routes/userRouter')
const mqttRouter = require('./routes/mqttRouter')
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Test api
app.get("/api/test", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

// //Test router
// app.use("/", userRouter);

//Test MQTT 
app.use("/", mqttRouter);

const server = app.listen(PORT, () => {console.log( `Server started on port ${PORT} `)});