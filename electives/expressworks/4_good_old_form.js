const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.argv[2];

app.use(bodyParser.urlencoded({ extended: false } ));

app.post('/form', (req, res) => {
	let backwardsString = req.body.str.split('').reverse().join('');
	res.send(backwardsString);
});

app.listen(port);

/*
	- Middleware are functions called before the route handlers.
	- Middleware can be added with the '.use()' function.
	- 'body-parser' is a module which contains the 'urlencoded' middleware.
	- The body can be accessed as an object by using the urlencoded middleware, present in the body-parser module.
*/

