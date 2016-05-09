/* 

Vowel Count

Fullstack Academy - JavaScript JumpStart

- Description:

Create the function "vowelCount(str)" that takes a str parameter and returns the number of vowels 
the string contains (ie. "Fullstack Academy" would return 5).  

**Do not count 'y' as a vowel for this challenge.**

**Example**

- INPUT: `vowelCount("Good Job");`
- Return Value: `3`

*** Write the vowelCount Function below *** */

function vowelCount(str) {
	
	var counter = 0
	var str = str.toLowerCase();
	
	for (var i = 0; i < str.length; i++) {
		
		if ((str[i] === "a") || (str[i] === "e") || (str[i] === "i") || (str[i] === "o") || (str[i] === "u")) {
			
			counter ++;
			
		}	
	
	}
		return counter;
	
	
}

vowelCount("Audrey"); 
