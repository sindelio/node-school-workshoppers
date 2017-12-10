var crypto = require('crypto')
var decipher_stream = crypto.createDecipher('aes256', process.argv[2])

process.stdin.pipe(decipher_stream).pipe(process.stdout)