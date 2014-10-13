// Required modules
var through = require('through'); // documentation : https://www.npmjs.org/package/through
var split = require('split'); // documentation : https://www.npmjs.org/package/split

// Counter
var numLine = 0;

// // Create map to transform characters
var mapTransformStr = through(

	function write(line) {
		var lineToReturn = line.toString();
		var returnValue = null;

		if (numLine % 2 === 0) {
			lineToReturn = lineToReturn.toLowerCase();
		}
		else {
			lineToReturn = lineToReturn.toUpperCase();
		}
		this.queue(lineToReturn + '\n');
		numLine++;
	},

	function end() { //optional
		this.queue(null);
	}
);

process.stdin.setEncoding('utf8');

// Get input data
var input = process.stdin;

// Use split module to break up a stream and reassemble it
var splitString = input.pipe(split());

// Use the map
var transformString = splitString.pipe(mapTransformStr);

// Pipes the result to the response object
transformString.pipe(process.stdout);



/***
 OFFICIAL SOLUTION :


var through = require('through');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf) {
    var line = buf.toString();
    this.queue(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
});
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);


***/
