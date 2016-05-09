//numberOfLoops: 
//why while loops are more optimal for randomly-generated values vs. for-loops (where you have a definite start & end point) 

function numberOfLoops(){
	var randomNumber = 0;
	var counter = 0;
	
	while(randomNumber < 100){
		randomNumber = Math.floor(Math.random()*(100+1));
		console.log(counter+=1);
	}
	return counter;
}

numberOfLoops();

