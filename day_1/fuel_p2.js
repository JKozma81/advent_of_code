const fs = require('fs');

let coords = fs.readFileSync('./coords.txt', 'utf8');

function maths(fuelForCord, arr) {
	if (Math.floor(fuelForCord / 3) - 2 <= 0) {
		return;
	} else {
		fuelForCord = Math.floor(fuelForCord / 3) - 2;
		arr.push(fuelForCord);
	}
	return maths(fuelForCord, arr);
}

let fuel = (coords = coords
	.split('\r\n')
	.map((coord) => parseInt(coord, 10))
	.map((coord) => {
		let fuels = [];
		maths(coord, fuels);

		return fuels.reduce((prevFuel, curFuel) => prevFuel + curFuel);
	})
	.reduce((prevVal, curVal) => prevVal + curVal));

console.log(fuel);
