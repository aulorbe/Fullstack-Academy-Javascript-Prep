/* 
Fullstack Academy - JavaScript JumpStart

Challenge - under_score to camelCase

Write a function to convert a variable name from under_score format to camelCase.
Make sure you support an unlimited number of underscores in the input!
*/

// Examples:

// underToCamel("first_name"); // should return firstName
// underToCamel("income_tax"); // should return incomeTax

// Write Code Below

function underToCamel(underName) {
	
	var foundUnder = false; 
	var camelCaseOutput = "";
	for (var i = 0; i < underName.length; i++) {
		debugger;
		
		if(underName[i] === "_") {
			foundUnder = true;
		} else {
			if (foundUnder) {
				camelCaseOutput += underName[i].toUpperCase();
				foundUnder = false;
			} else {
				camelCaseOutput += underName[i];
			}
		}
		
	}
	
return camelCaseOutput;	
	
}

underToCamel("first_name"); 
