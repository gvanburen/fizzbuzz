$(document).ready(function () {
	// $('.letsGo').mousedown(fizzBuzzy);
	getMax();

	function getMax() {
	var maxNumber = prompt("Enter a maxiumum number");
	maxNumber = +maxNumber;
		
		if (maxNumber % 1 != 0 || maxNumber == NaN) {
			alert("Please enter a whole number");
			getMax();
		} else {
			fizzBuzzy(maxNumber);
		}
	};

	function fizzBuzzy(max) {
		var fizz = "Fizz";
		var buzz = "Buzz";
		var fizzBuzz = "FizzBuzz"
		var results = $('#fbResults');

		for (theNumber = 1; theNumber <= max; theNumber++) {
			if (theNumber % 3 == 0 && theNumber % 5 == 0) {
				results.append(fizzBuzz + "<br/>");
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


