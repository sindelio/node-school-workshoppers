const express = require('express');
const app = express();
const port = process.argv[2];

app.get('/search', (req, res) => {
	res.json(req.query);
});

app.listen(port);

/*
	- Queries show up in the URL as '?variable1=data1&variable2=data2'.
	- queries are accessible from the req object with 'req.query'.
*/