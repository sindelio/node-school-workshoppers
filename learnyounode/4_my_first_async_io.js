var fs = require('fs');

fs.readFile(process.argv[2], function doneReading(err, fileContents){
	//if(err) return console.error(err);
	console.log(fileContents.toString().split('\n').length - 1);
});


//console.log(buf.toString().split('\n').length - 1);
