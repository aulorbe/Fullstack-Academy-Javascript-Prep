/* Exercise 2 - logChars

Create the function logChars, logChars accepts a string as an argument.  console.log all the characters of the string individually from the first character to the last character

logChars('JavaScript JumpStart');

*/


function logChars(str) {
	debugger;
	for (var index = 0; index < str.length; index++) {
		console.log(str[index]);
	}
}; 

logChars("hello");
