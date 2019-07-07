var timer = null;
var countDownNumber = 10;

var changeState = function(state){

	document.body.className = 'body-state' + state;
	clearInterval(timer);

	//For state 1 -  start counting down from 10 everytime and show the '10' as beginning
	countDownNumber = 10;
	document.getElementById('countdown').innerHTML = countDownNumber;
			
	//countdown
	if(state == 2){
		timer = setInterval(function(){
			countDownNumber = countDownNumber -1;
			document.getElementById('countdown').innerHTML = countDownNumber;
			
			
			if (countDownNumber <=0) {
				changeState(3);
			}

		}, 500)

	} else if(state == 3){
		var success = setTimeout(function(){

			// randomly success setting
			var randomNum = Math.round(Math.random()*10);
			console.log('randomNum', randomNum);

			if (randomNum > 5) {
				changeState(4); //well done!
			} else{
				changeState(5);// oh no!! 
			}

		},2000);
		
	}


}