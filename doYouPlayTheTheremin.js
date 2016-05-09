/*

Do You Play The Theremin?

Description:

Create the function doYouPlayTheTheremin. If your name starts with the letter "S" or "s", you are playing the Theremin!

Examples

- INPUT: doYouPlayTheTheremin("Griffin")
- OUTPUT: "Griffin does not play the Theremin!";


- INPUT: doYouPlayTheTheremin("Scott");
- OUTPUT: "Scott plays the Theremin!";


Write Code Below!
*/


function doYouPlayTheTheremin(name){
	if (name[0].toUpperCase() === "S") {
		return name + " plays the Theremin!"
	} else {
		return name +  " does not play the Theremin!"
	}
}

doYouPlayTheTheremin("Griffin");
