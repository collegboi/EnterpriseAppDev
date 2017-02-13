var express = require('express')
var Massive = require("massive");
var db = Massive.connectSync({db : "pgguide"});
var app = express()

app.get('/users', function (req, res) {
	//res.send('Hello World!')
	
	db.run("select * from users", function(err, res){
		console.log(res);
	});
})

app.get('/users/:id', function (req, res) {
	//res.send('Hello World!')
	
	var id = req.params.id
	
	db.run("select * from users where id = $1", [id], function(err, res){
		console.log(res);
	});
})

app.get('/products', function (req, res) {
	//res.send('Hello World!')
	
	db.run("select * from products", function(err, res){
		console.log(res);
	});
})

app.get('/products/:id', function (req, res) {
	//res.send('Hello World!')
	
	var id = req.params.id
	
	db.run("select * from products where id = $1", [id], function(err, res){
		console.log(res);
	});
})

app.get('/purchases', function (req, res) {
	
	db.run("select * from purchases", function(err, result){
		res.send(result);
	});
})

app.get('/purchases/:id', function (req, res) {
	
	var id = req.params.id
	
	db.run("select * from purchases where id = $1", [id], function(err, res){
		console.log(res);
	});
})


app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})