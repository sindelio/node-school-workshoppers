var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback){
	//console.log(dir);
	//console.log(ext);
	var filteredlist = [];
	

	fs.readdir(dir, function (err, list){
		if(err) return callback(err);

		list.forEach(function (file){
			if('.' + ext == path.extname(file)){
				filteredlist.push(file);
				//console.log(file);
				//console.log(path.extname(file));
			}
		});
		callback(null, filteredlist);
	});
};
