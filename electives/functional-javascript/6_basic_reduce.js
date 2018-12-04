function countWords(inputWords) {
	return inputWords.reduce((wordCounter, currenValue) => {
		wordCounter[currenValue] = ++wordCounter[currenValue] || 1; // increment or initialize to 1
		return wordCounter; 
	}, {}); // second argument to reduce initialises wordCounter to {}
}

module.exports = countWords;