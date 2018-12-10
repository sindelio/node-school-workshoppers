const express = require('express');
const app = express();
const crypto = require('crypto');

app.param('id', (req, res, next, id) => {
	req.id = id;
	next();

});

app.put('/message/:id', (req, res) => {
	const id = req.id;
	res.send(
		crypto
			.createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
	);
});

app.listen(process.argv[2]);

/*
	- Important properties on the request object: params, body, query, url.
*/
