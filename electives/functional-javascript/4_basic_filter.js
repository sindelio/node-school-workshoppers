function getShortMessages(messages) {
	return messages
		.map(messageObject => messageObject.message)
		.filter(message => message.length < 50);
}

module.exports = getShortMessages