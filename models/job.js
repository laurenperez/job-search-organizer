var mongoose = require('mongoose');


var jobSchema = new mongoose.Schema({
  title: {type: String, required: true},
	companyName: String,
	location: String,
	keyWords: String,
	jobSource: String,
	jobURL: String,
	postedSalary: Number,
	expectedSalary: Number,
	applicationDate: String,
	contact: {
		email: String,
		phone: String,
		name: String,
	},
	interview: {
		phoneDate: String,
		phoneNotes: String,
		phoneStatus: String,
		personDate: String,
		personNotes: String,
		personStatus: String, 
	}
});


var Job = mongoose.model('Job', jobSchema);


module.exports = Job;
