
var printStars = function(count) {
	var star = " * ";
	var string = "";
	for (var i = 0; i < count; i++) {
		console.log(string += star);
	}
};

printStars(10);


module.exports = printStars();
