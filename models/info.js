const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
	record: { type: String, required: true },
	
})

const model = mongoose.model('infoModel', infoSchema)

module.exports = model;
