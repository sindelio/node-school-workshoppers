const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/home', (_ , res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log('HTTP server listening on port:', port);
});

/*
	- '.listen' is necessary to start the server.
	- 
*/