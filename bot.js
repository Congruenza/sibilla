// Hello world check.
console.log("Up 'n' running… 😎 \n");

// Import. library.
var Twit = require('twit');

// Importing the access configuration.
var Config = require('./config');

// LOgging in a variable.
var T = new Twit(Config);

tweetIt();

function tweetIt(){
	var tweet = {
	status: " " ,
	};
	console.log(voc.lemmi[ord]);
	ord += 1;

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err) {
			console.log("Something went wrong… 😰 \n");
		} else {
			console.log("Everything went fine… 🙌 \n");
		}
	}

}
