const express = require('express');
const router = express.Router();

router.get('/', require('./controller').helloWorld);

module.exports = router;
