const express = require('express');
const router = require('./api/router');
const app = express();

const mongoose = require('mongoose');



const db = mongoose.createConnection('mongodb://localhost:27017/nodeJS');
db.on('error', console.error.bind(console, 'mongoose connection error: '));
db.once('open', () => {
    console.log("Connected");
});


app.use(router);
app.listen(3000, () => true);