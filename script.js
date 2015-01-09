$(document).ready(function () {
	$('.letsGo').mousedown(fizzBuzzy);

	function fizzBuzzy() {
		var fizz = "Fizz";
		var buzz = "Buzz";
		var fizzBuzz = "FizzBuzz"
		var results = $('#fbResults');

		for (theNumber = 1; theNumber <= 100; theNumber++) {
			if (theNumber % 3 == 0 && theNumber % 5 == 0) {
				results.append(fizzBuzz + "<br>");
			} else if (theNumber % 3 == 0) {
				results.append(fizz + "<br/>");
			} else if (theNumber % 5 == 0) {
				results.append(buzz + "<br/>");
			} else {
				results.append(theNumber + "<br/>");
			}
		}
	};
});


