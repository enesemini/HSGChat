var express = require("express");
var bodyParser = require("body-parser");
// var mongodb = require("mongodb");
// var ObjectID = mongodb.ObjectID;

var POSTS = [];

var app = express();
app.use(bodyParser.json());

console.log("Database connection ready");

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});


// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/posts"
 *    GET: finds all posts
 *    POST: creates a new post
 */

app.get("/api/posts", function(req, res) {
  console.log('Api Posts');
});

app.post("/api/posts", function(req, res) {
});

/*  "/api/posts/:id"
 *    GET: find contact by id
 *    PUT: update contact by id
 *    DELETE: deletes contact by id
 */

app.get("/api/posts/:id", function(req, res) {
});

app.put("/api/posts/:id", function(req, res) {
});

app.delete("/api/posts/:id", function(req, res) {
});