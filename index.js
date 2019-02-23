var express = require('express');
var app = express();
var user = require("./models/userinfomodel");
var bodyparser = require('body-parser');
var mainrouter = require('./routes/mainrouter');
var auth = require('./routes/auth');

app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.use('/',mainrouter);
app.use("/about",mainrouter);
app.use("/signin",auth);	
app.use("/signup",auth);

app.get("/takeatest",function(req,res)
{
	res.render("test");
});

app.listen("3000",function(req,res)
{
	console.log("Working...");
});