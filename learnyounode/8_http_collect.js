var http = require('http');

var url = process.argv[2];
//console.log(url);

var contents = '';

http.get(url, function (response){
	//response.setEnconding('utf8');
	
	response.on('error', function (error){
		console.error(error);
		//return error;
	});
	response.on('data', function (data){
		contents += data;
		//console.log(data.toString());

	});

	response.on('end', function (end){
		console.log(contents.length);
		console.log(contents);
	});

	

});