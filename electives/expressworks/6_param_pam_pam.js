const express = require('express');
const app = express();
const crypto = require('crypto');

app.put('/message/:id', (req, res) => {
	const id = req.params.id;
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
	- params are represented with a colon ':' in the request URL.
	- params and query handling are natively supported by Express
*/
