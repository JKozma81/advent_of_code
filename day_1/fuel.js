const fs = require('fs');

let coords = fs.readFileSync('./coords.txt', 'utf8');

let fuel = (coords = coords
	.split('\r\n')
	.map((coord) => Math.floor(parseInt(coord, 10) / 3) - 2)
	.reduce((prevVal, curVal) => prevVal + curVal));

console.log(fuel);
