// Required modules
var through = require('through'); // documentation : https://www.npmjs.org/package/through

process.stdin.setEncoding('utf8');

// Create map to transform characters
var mapUpperCase = through(

	function write(chunk) {
		this.queue(chunk.toString().toUpperCase());
	},

	function end() { //optional
		this.queue(null);
	}
);

// Use the map
var valueToReturn = process.stdin.pipe(mapUpperCase);

// Pipes the result to the response object
valueToReturn.pipe(process.stdout);





/***
 OFFICIAL SOLUTION :


var through = require('through');
var tr = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
});
process.stdin.pipe(tr).pipe(process.stdout);


***/
