const express = require('express');
const mongoose = require('mongoose');
const Log = require('log');

const router = require('./api/router');

const log = new Log('info');
const app = express();

const db = mongoose.connect('mongodb://localhost:27017/nodeJS'); 

mongoose.connection.on('connected', function () {  
	log.info(`Mongoose default connection open to ${db}`);
}); 

mongoose.connection.on('error',function (err) {
	log.error.bind(console, `mongoose connection error: ${err}`);
}); 

mongoose.connection.on('disconnected', function () {  
	log.info('Mongoose default connection disconnected'); 
});

app.use(router);
app.listen(3000, () => true);