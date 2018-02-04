const Log = require('log');

module.exports.helloWorld = (req, res) => res.send('Hello world!');

module.exports.createUser = (req, res) => {
	const log = new Log('info');
	const { User } = require('../model/mapping');
    
	User.create({ name: 'joaquin' }, function(err, doc) {
		if (err) {
			log.error('Error creating user');            
			res.status(500).send('Error creating user');            
		} else {
			log.info(`User ${doc} was created sucessfully`);            
			res.status(200).send(`User ${doc} was created sucessfully`);                        
		}
	});
};

module.exports.getUsers = (req, res) => {
	const { User } = require('../model/mapping');
	const log = new Log('info');

	User.find({}, function(err, docs) {
		if (err) {
			log.error('Error creating user');
		} else {
			res.status(200).send({ docs });                        
		}
	});
};