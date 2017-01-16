// Hello world check.
console.log("Up 'n' running… 😎 \n");

// Import. library.
const Twit = require('twit');

// Importing the access configuration.
const Config = require('./config');

// Logging in a variable.
const T = new Twit(Config);

// Handle the resopnse. 
function tweetIt(r){
	var tweet = {
	status: r ,
	};

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
		if(err) {
			console.log("Something went wrong… 😰 \n" + err );
		} else {
			console.log("Everything went fine… 🙌 \n");
		}
	}
}


// Filter the twitter public stream by mention.
const stream = T.stream('statuses/filter', { track: '@BotSibilla' })

// Stream on!!!
stream.on('tweet', function (tweet) {
	// Logging the user
	const usr = "@" + tweet.user.screen_name;
	console.log("User: " + usr);
	// Logging the text.
	const string = tweet.text;
	console.log("Text: " + string);

	// Filtering the tweet.
	// Fetching the first word after @BotSibilla.
	const word = /^(?=.*\bBotSibilla\b)(?:\S+ ){1}(\S+)/ig.exec(string);
	console.log("Word: " + word[1]);

	// Tweets back the same word
	const response =  usr + " " + word[1];

	tweetIt(response);
	console.log("Response: " + response);

});
