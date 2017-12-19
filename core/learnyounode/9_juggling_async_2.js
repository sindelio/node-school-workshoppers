var http = require('http')
var bl = require('bl')
var after = require('after')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var contents = []

var count = after(3, function (){
	for(i = 0; i < 3; i++){
		console.log(contents[i].toString())
	}
})


function collect(url, i){
	http.get(url, function(response){
		response.pipe(bl(function (err, data){
			contents[i] = data
			count() // Depois que as 3 terminarem, chama a função de impressão
		}))
	})
}

for(i = 0; i < 3; i++){
	collect(process.argv[2 + i], i)
}





