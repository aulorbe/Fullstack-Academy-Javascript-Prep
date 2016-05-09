/* 

Repeat A String

Fullstack Academy - JavaScript JumpStart

- Description

Create a function "repeat" that accepts two arguments, the string to repeat and a number that represtents how many times to repeat the string argument.  Return a string that concatenates all the times the string is repeated.

*NOTE: Do NOT use the [String.prototype.repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)*

**Examples**

- INPUT: `repeat("yo",4);`
- OUTPUT: `'yoyoyoyo'`

- INPUT: `repeat("yo",0);`
- OUTPUT: `''`

- INPUT: `repeat("bye",6);`
- OUTPUT: `'byebyebyebyebyebye'`

Write Code Below
*/

function repeat (str, num) {
	
	var randomString = "";
	for (var i = 0; i < num; i++) {
		randomString += str;
		
	}
	
	return randomString; 
	
}

repeat ("hello", 9); 
