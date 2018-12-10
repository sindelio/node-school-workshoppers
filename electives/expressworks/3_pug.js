const express = require('express');
const app = express();
const path = require('path');
const port = process.argv[2];
const pugFilePath = process.argv[3];

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
	res.render(pugFilePath, { date: new Date().toDateString()});
});

app.listen(port, () => {
	console.log('Server listening on port:', port);
});

/*
	- Express has this view concept. It can be set.
	- The view engine can also be set, gotta study those.
*/