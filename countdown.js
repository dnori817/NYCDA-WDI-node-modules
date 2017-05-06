const colors = require("colors");

// function to print stars
function printStars(count) {
	for (let i = count; i > 0; i--) {
		setTimeout(function() {
			let star = " * ";
			let string = "";

			for (let j = 0; j < i; j++) {
				string = string + star;
			}
			// random colors and style
			console.log(string.random);
		}, count * 1000 - (i * 1000));
	}
}


module.exports = printStars;
