const express = require('express');
const app = express();
const path = require('path');
const port = process.argv[2];
const filePath = process.argv[3];

app.use(express.static(filePath || path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log('Server listening on port:', port);
});

/*
	- Files have to be served before they can be sent to requesters.
	- The simplest way to serve files is via static serving.
	- '__dirname' is a global variable that holds the name of the working directory.
	- 'express.static()' is a built-in middleware for static serving.
*/