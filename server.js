var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser())
var mongoURL = require('./config.js').mongoURL;
var mongoose = require('mongoose');
var db = mongoose.createConnection(mongoURL);
var validator = require('validator');
var axios = require('axios');

//Schemas:
const User = require('./models/user.js');


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post('/api/user/inviteEmail', (req, res) => {

	// save the user and resolve the user doc
	if (validator.isEmail(req.body.email)) {
		var newUser = new User({
		  email: req.body.email,
		  role: 'user',
		});
		
		console.log('newuser ===', newUser);

		db.collection('users').save(newUser, (err, result) => {
	    if (err) {
	    	return console.log('error', err);
	    } else {
		    console.log('saved to database')
		    res.sendStatus(201);
	    }
		});
	} else {
		console.log('User sent fake email')
		res.sendStatus(500);
	}

});


//to keep free heroku app awake
setInterval(function() {
    axios.get('https://bountytest.herokuapp.com/')
      .then((res) => {
      	console.log('pinged server');
      })
      .catch((error) => {
      	console.log('error pinging server');
      });
}, 300000); // every 5 minutes (300000)


app.listen(process.env.PORT || 8080);