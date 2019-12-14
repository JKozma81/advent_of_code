const fs = require('fs');

let steps;

try {
	steps = fs.readFileSync('./routes.txt').toString();
} catch (err) {
	console.error(err.toString());
}

let vire1 = steps.split('\r\n')[0].split(',');
let vire2 = steps.split('\r\n')[1].split(',');

console.log('vire1: ', vire1);
console.log('vire2: ', vire2);
