var fs = require('fs');
var path = require('path');
//console.log(process.argv[3]);
fs.readdir(process.argv[2], function callback(err, list){
	//console.log(list);
	list.forEach(function (file){
		if('.' + process.argv[3] == path.extname(file)){
			console.log(file);
			//console.log(path.extname(file));
		}
	});
});


 //var fs = require('fs')
 //   var path = require('path')

 //   var folder = process.argv[2]
 //   var ext = '.' + process.argv[3]

 //   fs.readdir(folder, function (err, files) {
 //     if (err) return console.error(err)
 //     files.forEach(function (file) {
 //       if (path.extname(file) === ext) {
 //         console.log(file)
 //       }
 //     })
 //})