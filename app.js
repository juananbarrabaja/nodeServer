const express = require('express');
const router = require('./api/router');
const app = express();

app.use(router);
app.listen(3000, () => true);