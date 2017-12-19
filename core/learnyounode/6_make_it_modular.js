var mymodule = require('./6_mymodule');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function (err, list){
	if(err) {
		console.log(err);
		return err;	
	}

	list.forEach(function (filename){
		console.log(filename);
	});

});