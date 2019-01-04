var express=require('express');
var router=express.Router();
//homepage
router.get('/', ensureAuthenticated,function(req, res){
	res.write(User.name);
	res.render('index');
});
function ensureAuthenticated(req,res){
	if(req.isAuthenticated())
	{
		res.render('index');
	}
	else
	{
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}
module.exports=router;