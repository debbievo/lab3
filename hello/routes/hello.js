
/*
 * GET home page.
 */

exports.view = function(req, res){
	var displayName = req.params.userName;
	console.log("name is " + displayName);
  	if(req.params.userName == undefined){
  		displayName = "World";
  	}
  	res.render('index', {
  		'name': displayName,
  });
};