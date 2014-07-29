// documentation : http://nodejs.org/api/process.html
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
	var chunk = process.stdin.read();
	if (chunk !== null) {
		process.stdout.write(chunk);
	}
});

// official solution :
// process.stdin.pipe(process.stdout);
