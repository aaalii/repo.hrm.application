var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var RoleSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Naam moet ingevuld worden'
	},
	description: {
		type: String,
		default: '',
		trim: true
	}
});

mongoose.model('Role', RoleSchema);