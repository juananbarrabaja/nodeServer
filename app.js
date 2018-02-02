const express = require('express');
const router = require('./api/router');
const app = express();
const mongoose = require('mongoose');
const Log = require('log');
const log = new Log('info');

const db = mongoose.createConnection('mongodb://localhost:27017/nodeJS');
db.on('error', log.error.bind(console, 'mongoose connection error: '));
db.once('open', () => log.info('Connected'));

app.use(router);
app.listen(3000, () => true);