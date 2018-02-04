
// module.exports.User = (app, mongoose) => {
// 	const userSchema = new mongoose.Schema({
// 		name: { type: String },
// 	});

// 	mongoose.model('User', userSchema);
// };

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
});

module.exports.User = mongoose.model('User', userSchema);
