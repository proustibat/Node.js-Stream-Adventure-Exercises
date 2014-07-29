// Required modules
var fs = require("fs");

// User Arguments or defaults values
var fileLocation = "allo.txt";
if (process.argv[2] !== undefined) {
	fileLocation = process.argv[2];
}

// Opens the file as a readable stream
var readStream = fs.createReadStream(fileLocation);

// The stream is valid to piping
readStream.on("open", function onOpen() {
	// Pipes the read stream to the process.stdout
	readStream.pipe(process.stdout);
});

// Catches any errors while creating the stream
readStream.on("error", function onError(err) {
	process.stderr.write(err.toString());
});
