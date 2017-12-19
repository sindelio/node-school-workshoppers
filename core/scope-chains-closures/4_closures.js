function foo(){
	var bar = 10;
	quux = 10;
	function zip(){
		var quux = 5; // shadow
		bar = true;
	}
	return zip;
}