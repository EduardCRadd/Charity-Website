
const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const https = require("node:https");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function (req, res) {
  res.render("home");
});

app.get('/contact', function (req, res) {
  res.render("contact");
});







app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
