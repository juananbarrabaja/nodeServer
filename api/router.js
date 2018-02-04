const express = require('express');
const router = express.Router();

router.get('/', require('./controller').helloWorld);

router.post('/user/create', require('./controller').createUser);
router.get('/user', require('./controller').getUsers);

module.exports = router;
