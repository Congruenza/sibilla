// Hello world check.
console.log("Up 'n' running… 😎 \n");

// Import. library.
var Twit = require('twit');

// Importing the access configuration.
var Config = require('./config');

// LOgging in a variable.
var T = new Twit(Config);

// Loading the array
var voc =require('./lemmi');
// Testing the voc
console.log("We have just loaded " + voc.lemmi.length + " words… 😱 \n");

// Twitting stuff.

// Setting the interval.
 var int = 1000*60*30;
 var ord = 0;

tweetIt();
setInterval( tweetIt, int);


function tweetIt(){
	var tweet = {
	status: "🤖 -> Ho appena #pensato che #" + voc.lemmi[ord] + " fa #schifo \n #bot" ,
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
