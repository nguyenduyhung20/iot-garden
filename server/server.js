const express = require('express')
const userRouter = require('./routes/userRouter')
const bodyParser = require('body-parser');
const app = express();

const PORT = 5000;

//Test api
app.get("/api/test", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]});
});

//Test router
app.use("/", userRouter);

const server = app.listen(PORT, () => {console.log( `Server started on port ${PORT} `)});