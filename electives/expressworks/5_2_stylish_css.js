const express = require('express');
const app = express();
const stylus = require('stylus');
const path = require('path');
const port = process.argv[2];

app.use(express.static(path.join(__dirname, '/5_public/main.css')));
app.use(stylus.middleware(path.join(__dirname, '/5_public/main.css')));

app.get('/main.css', (req, res) => {
	res.sendFile(path.join(__dirname, '/5_public/main.css'));
});

app.listen(port);

/*
	- Path must be absolute for 'res.sendFile()'.
*/
