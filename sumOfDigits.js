/*
Sum Of Digits- Exercise Link

Create the function sumOfDigits that adds individual digits of a number and return the sum.

**Example:**

- INPUT: `sumOfDigits(414);`
4+1+4
- Return Value: `9`

- INPUT: `sumOfDigits(2913);`
- Return Value: `15`*/

function sumOfDigits(num) {
	
	var sum = 0;
	num = num.toString();

	
	for (var i = 0; i < num.length; i++) {
		
		
		sum += parseInt(num[i])
    }
    
	
	return sum;
	
}

sumOfDigits(567);
