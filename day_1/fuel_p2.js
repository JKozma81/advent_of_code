const fs = require('fs');

let coords = fs.readFileSync('./coords.txt', 'utf8');

let preVal = 0;

function maths(fuelForCord) {
	if (Math.floor(fuelForCord / 3) - 2 <= 0) {
		return preVal;
	} else {
		fuelForCord = Math.floor(fuelForCord / 3) - 2;
		console.log(preVal);
		preVal += fuelForCord;
		console.log(preVal);
	}
	return maths(fuelForCord);
}

let fuel = (coords = coords
	.split('\r\n')
	// .map((coord) => Math.floor(parseInt(coord) / 3) - 2)
	.map((coord) => parseInt(coord, 10))
	.map(maths)
	.reduce((prevVal, curVal) => prevVal + curVal));

console.log(fuel);

// [ 20023 ]
// [ 6672 ]
// [ 2222 ]
// [ 738 ]
// [ 244 ]
// [ 79 ]
// [ 24 ]
// [ 6 ]

// 30008
