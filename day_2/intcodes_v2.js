const fs = require('fs');

let codesData;
try {
	codesData = fs.readFileSync('intcodes.txt').toString();
} catch (err) {
	console.error(err.toString());
}

codesData = codesData.split(',').map(ints => parseInt(ints, 10));

const resObj = {
	noun: 0,
	verb: 0,
	result: 0
};

function calculate(noun, verb, arr) {
	arr[1] = noun;
	arr[2] = verb;

	for (let i = 0; i < arr.length; i++) {
		if (i === 0 || !(i % 4)) {
			let temp = arr.slice(i, i + 4);
			if (temp[0] === 1) {
				arr[temp[3]] = arr[temp[1]] + arr[temp[2]];
			}
			if (temp[0] === 2) {
				arr[temp[3]] = arr[temp[1]] * arr[temp[2]];
			}
			if (temp[0] === 99) {
				resObj.noun = noun;
				resObj.verb = verb;
				resObj.result = arr[0];
				return resObj;
			}
		}
	}
}

for (let i = 12; i < 100; i++) {
	for (let j = 2; j < 100; j++) {
		let res = calculate(i, j, codesData.slice(0, codesData.length - 1));
		if (res.result === 19690720) {
			console.log(`Noun: ${res.noun}, verb: ${res.verb}`);
		}
	}
}

// console.log(codesData[0]);
