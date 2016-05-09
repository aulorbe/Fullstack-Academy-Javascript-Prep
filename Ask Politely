/*

Ask Politely

- Fullstack Academy - JavaScript JumpStart

- Description

Create the function askPolitely that accepts a sentence 
as an argument. If the last character of the sentence is 
a question mark, then make sure the question ends with 
the word "please".

If the sentence is not a question, then return the 
inputted string without modification. If the sentence 
is a question, but already has a please, then also
return the input without modification.

**Examples**

askPolitely("May I borrow your pencil?");
// returns "May I borrow your pencil please?"

askPolitely("May I ask a question please?");
// returns "May I ask a question please?"

askPolitely("My name is Grace Hopper.");
// returns "My name is Grace Hopper."

Write Code Below
*/

//Main Objectives: 

//if there is a question mark as a last character 
// then we want to find out if the last word in that ^ sentence is please or not 

function askPolitely(sentence) {
	if (sentence.slice(-1) === "?"){
		if (sentence.slice(-7) === "please?") {
			return sentence; 
	} else {
		return sentence.slice(0,-1) + " please?";
	} 
		
	} else {
		return sentence;
	}

}

askPolitely("may i borrow your pencil" )
