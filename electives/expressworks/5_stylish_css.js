const express = require('express');
const app = express();
const stylus = require('stylus');
const port = process.argv[2];
const publicFolder = process.argv[3];

app.use(express.static(publicFolder));
app.use(stylus.middleware(publicFolder));

app.listen(port);

/*
	- Middleware are executed in the order 'app.use()' is called!
	- Stylus is a module that generates Cascade Style Sheets - CSS, on the fly, from .styl files.
	- Static serving automatically responds to get requests for the files in the served folder.
	- 'path.join()' is commonly used for cross compatibility in different OSs.
*/
