var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
	firstname: {
		type: String,
		default: '',
		trim: true,
		required: 'Voornaam moet ingevuld worden'
	},
	lastname: {
		type: String,
		default: '',
		trim: true,
		required: 'Achternaam moet ingevuld worden'
	},
	othername: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Roepnaam moet ingevuld worden'
	},
	dateofbirth: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Geboortedatum moet ingevuld worden'
	},
	gender: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Geslacht moet ingevuld worden'
	},
	nationality: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Afkomst/Nationaliteit moet ingevuld worden'
	},
	maritalstatus: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Burgerlijke staat moet ingevuld worden'
	},
	address: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Adres moet ingevuld worden'
	},
	town: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Stad moet ingevuld worden'
	},
	postcode: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Postcode moet ingevuld worden'
	},
	country: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Land moet ingevuld worden'
	},
	hometel: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Huistelefoon moet ingevuld worden'
	},
	homemobile: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Mobiel prive moet ingevuld worden'
	},
	homemail: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Mail prive moet ingevuld worden'
	},
//	leader: {
//		type: Schema.ObjectId,
//		ref: 'Employee',
//		default: ''
//	},
	worktel: {
		type: String,
		default: '',
		trim: true
	},
	workmobile: {
		type: String,
		default: '',
		trim: true
	},
	workmail: {
		type: String,
		default: '',
		trim: true,
	//	required: 'Mail werk moet ingevuld worden'
	},
//	education: {
//		type: Schema.ObjectId,
//		ref: 'Education',
//		default: ''
//	},
//	skills: {
//		type: Schema.ObjectId,
//		ref: 'Skills',
//		default: ''
//	}, MEAN BLZ 122 !!!!!!
	othercomments: {
		type: String,
		default: '',
		trim: true
	}
});

mongoose.model('Employee', EmployeeSchema);