var crypto = require('crypto')
var zlib = require('zlib')
var tar = require('tar')
var through = require('through2')

var cipher = process.argv[2]
var password = process.argv[3]

var decipher_stream = crypto.createDecipher(cipher, password)
var decompress_stream = zlib.createGunzip()
var parser = new tar.Parse()

parser.on('entry', function (e){
	var hasher_stream = crypto.createHash('md5', { encoding: 'hex'} )
	e.pipe(hasher_stream).pipe(through(function transformation(chunk){
		if(e.type == 'File'){
			this.push(chunk.toString() + ' ' + e.path + '\n')
		}
	})).pipe(process.stdout)
})

process.stdin
	.pipe(decipher_stream)
	.pipe(decompress_stream)
	.pipe(parser)




