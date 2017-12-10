var total = 0;
for(i = 2; i < process.argv.length; i++){
	total += Number(process.argv[i]);
	//console.log(process.argv[i]);
}

console.log(total);
//console.log(Number(process.argv[2]) + Number(process.argv[3]) + );