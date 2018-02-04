const Log = require('log');

module.exports.helloWorld = (req, res) => res.send('Hello world!');

module.exports.createUser = (req, res) => {
	const log = new Log('info');
	const { User } = require('../model/User');
    
	User.create({ name: 'joaquin' }, function(err, doc) {
		if (err) {
			log.error('Error creating user');            
			res.status(500).send('Finished');            
		} else {
			log.info(`User ${doc} was created sucessfully`);            
			res.status(200).send('Finished');                        
		}
	});
};