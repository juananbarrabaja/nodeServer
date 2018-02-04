const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const messageSchema = new mongoose.Schema({
	text: { type: String },
	sender: { type: Schema.Types.ObjectId, ref: 'User' },
	receiver: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports.Message = mongoose.model('Message', messageSchema);