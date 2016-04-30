var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('Issues');
    collection.find({}, {}, function(e,docs){
	res.render('index', {
	    "issues" : docs
	});
    });
});

/* GET DB Connect */
router.get('/issues', function(req, res) {
    var db = req.db;
    var collection = db.get('Issues');
    collection.find({}, {}, function(e,docs){
<<<<<<< HEAD
	res.json({
=======
	res.render('issues', {
>>>>>>> 393786544b1c31f9eabcbc98462d78bb2ae07bb1
	    "issues" : docs
	});
    });
});

/* GET New Issue Page */
router.get('/newissue', function(req, res){
    res.render('newissue', {title: 'Add New Issue' });
});

/* POST to Add Issues Service */
router.post('/addissue', function(req, res){
    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var Team = req.body.team;
    var Issue = req.body.issuedesc;
    var Account = req.body.account;

    // Set our collection
    var collection = db.get('Issues');

    //Submit to the DB
    collection.insert({
	"team": Team,
	"issue": Issue,
	"account": Account
    }, function (err, doc) {
	if (err) {
	    // If it failed, return error
	    res.send("There was a problem adding the information to the DB.");
	}else {
	    // And forward to success page
	    res.redirect("issues");
	}
    });
});
    
module.exports = router;
