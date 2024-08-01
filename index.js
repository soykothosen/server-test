var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine','ejs');
app.use(express.static('public'));


// var db = mysql.createConnection({
// 	multipleStatements: true,
//     host    : 'localhost',
//     user     : 'soykot16',
//     password : 'SecureSave7124@',
//     database : 'servertest'
//   });


var db = mysql.createConnection({
	multipleStatements: true,
    host    : 'localhost',
    user     : 'root',
    password : '',
    database : 'servertest'
  });



  db.connect(function(err){
    if(err){
        throw err;
    }
    console.log("Database is connected");
});

app.get("/",function(req,res){

    //res.render("index.ejs",{login_status: req.login_status, userId: req.userId, category: req.category, products: req.products});

    res.send("Server with database is running on 5000")

}) 



app.listen('5000', function(err){
	if(err){
		throw err;
	} else{
	console.log("Server run on port http://localhost:5000");
    }
});
