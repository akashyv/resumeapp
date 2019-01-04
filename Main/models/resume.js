var mongoose=require('mongoose');

var ResumeSchema=mongoose.Schema({
	name: {
		type: String
	},
	age: {
		type: String
	},
	course: {
		type: String
	}
});

var Resume=module.exports=mongoose.model('Resume',ResumeSchema);

module.exports.createResume=function(newResume, callback){
        newResume.save(callback);
}
