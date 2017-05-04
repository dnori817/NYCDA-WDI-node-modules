// function to print stars
const printStars = function(count) {
	for (let i = count; i > 0; i--) {
		setTimeout(function() {
			let star = " * ";
			let string = "";

			for (let j = 0; j < i; j++) {
				string = string + star;
			}
			// random colors and style
			console.log(string.random);
		}, 10000 - (i * 1000));
	}
};

printStars(10);


module.exports = printStars();
