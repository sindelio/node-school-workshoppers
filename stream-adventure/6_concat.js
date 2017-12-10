var concat = require('concat-stream')

process.stdin.pipe(concat(function (data){
	var contents = data.toString().split('').reverse().join('')
	console.log(contents)
}))

