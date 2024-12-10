const express = require('express');
const cors = require('cors');
const dbUrl = require('./key');
const connectToMongoDB = require('./connection');
const route = require('./routes/route');

const app = express();
const port = 8000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//mongoDB
connectToMongoDB(dbUrl);

//Routes
app.use('/', route);

app.listen(port, () => {
    console.log("server started!")
})