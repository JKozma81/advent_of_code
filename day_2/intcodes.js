const fs = require('fs');

let codesData;
try {
	codesData = fs.readFileSync('intcodes.txt').toString();
} catch (err) {
	console.error(err.toString());
}

codesData = codesData.split(',').map(ints => parseInt(ints, 10));

codesData[1] = 12;
codesData[2] = 2;

for (let i = 0; i < codesData.length; i++) {
	if (i === 0 || !(i % 4)) {
		let temp = codesData.slice(i, i + 4);
		if (temp[0] === 1) {
			codesData[temp[3]] = codesData[temp[1]] + codesData[temp[2]];
		}
		if (temp[0] === 2) {
			codesData[temp[3]] = codesData[temp[1]] * codesData[temp[2]];
		}
		if (temp[0] === 99) {
			break;
		}
	}
}

console.log(codesData[0]);
