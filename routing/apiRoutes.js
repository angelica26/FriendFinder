//Linking to the friends data
var friends = require("../data/friends");

//API route
module.exports = function(app) {

//API GET request
	app.get("/api/allfriends", function(req, res) {
		res.json(friends);
	});

//API POST request
	app.post("/api/allfriends", function(req, res) {
		friends.push(req.body);
	});
};