var http = require('http');
var bl = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var contents = [];

http.get(url1, function(response){
	response.pipe(bl(function (err, data){
		contents[0] = data;
		console.log(data.toString());
		http.get(url2, function(response){
			response.pipe(bl(function (err, data){
				contents[1] = data;
				console.log(data.toString());
				http.get(url3, function(response){
					response.pipe(bl(function (err, data){
						contents[2] = data;
						console.log(data.toString());
					}));
				});	
			}));
		});
	}));
});
