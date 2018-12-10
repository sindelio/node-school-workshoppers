const express = require('express');
const app = express();
const fs = require('fs');
const port = process.argv[2];
const filePath = process.argv[3];

app.get('/books', (req, res) => {
	fs.readFile(filePath, (error, books) => {
		if(error) throw new Error('Error: ', e);
		// console.log(books);
		const booksObject = JSON.parse(books);
		res.json(booksObject);
	});
});

app.listen(port);

/*
	- The URL in the request always starts with a '/'.
	- Callbacks usually use the error first signature, with the result following.
	- 'res.json()' converts the contents of data to JSON before sending it.
	- 'JSON.parse()' transforms the value in an object.
	- 'JSON.stringify()' transforms the value in a JSON string.
*/
