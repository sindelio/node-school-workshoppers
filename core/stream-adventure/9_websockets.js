var ws = require('websocket-stream')

var ws_stream = ws('ws://localhost:8099')
ws_stream.write('hello\n')