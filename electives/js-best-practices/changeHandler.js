var coins = {
	p: 1, // penny
	n: 5, // nickel
	d: 10, //dime
	q: 25 // quarter
}

module.exports = {
  getAmount: function(coinType) {
		if(!coins.hasOwnProperty(coinType)){
			throw new Error('Unrecognized coin ' + coinType);
		}	
		return coins[coinType];
	},
	
	convertToChange: function(amountInCents){
		var change = [];
		while(amountInCents >= 25){
			change.push('q');
			amountInCents -= 25;
		}
		while(amountInCents >= 10){
			change.push('d');
			amountInCents -= 10;
		}
		while(amountInCents >= 5){
			change.push('n');
			amountInCents -= 5;
		}
		while(amountInCents >= 1){
			change.push('p');
			amountInCents -= 1;
		}
		return change;
	}
};