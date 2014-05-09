var express = require ('express');
var expressHandlebars = require('express3-handlebars');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('favdata:369aaa@dbh55.mongolab.com:27557/favdata');


//execute the express
var app = express();

//look for the layout called 'main'
var handlebars = expressHandlebars.create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.favicon("public/favicon.ico")); 
//app.use(bodyParser()); // don't use bodyParser..!!
app.use('/public', express.static('public'));


// create new information 
var Info = mongoose.model('Info', {
	imageData: String,
	title: String
	// name: String
	// address: String
});


/////////////////////// ROUTES //////////////////////
app.get('/', function(req, res){
  res.render('index');
});


app.get('/gallery', function(req, res){
	Info.find({}, function(err,info){
		if(err){
			res.json(err);
		}else {
			//infoData is the object that I defined in the gallery
			res.render('gallery',{infoData: info});
		}
	});
});

//post ---- > executed in the html: form action  
app.post('/submitFav', function(req,res){
	//console.log("--------------------------------------------");
	//console.log(req.body);

	var infoData = {
		imageData : req.body.imageData,
		title: req.body.title
		// name: req.body.name
		// address: req.body.address
	};

	var i = new Info(infoData);
	i.save(function(err,doc){
		if(err){
			console.log(err);
		} else{
			console.log("SUCCESS!!!!!!!!");
			// console.log(doc);
			//res.status(200).json({status:"Success!"});
			res.send("WooHoo");
			//res.redirect('/gallery');
		}
	});
});




app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('firing up on port %d', app.get('port'));
