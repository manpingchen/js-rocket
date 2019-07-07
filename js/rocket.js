	
window.onload = starSize;


	function starSize(){
		for (i = 1; i <= 8; i++) {
			var starSizeValue = randomNum * 0.3 * i;
			var starTop = Math.round(Math.random()*100) * i;
			var starLeft = Math.round(Math.random()*100) * i;

			document.getElementsByClassName('star')[i].style.width = starSizeValue + 'px';
			document.getElementsByClassName('star')[i].style.height = starSizeValue + 'px';
			document.getElementsByClassName('star')[i].style.top = starTop + 'px';
			document.getElementsByClassName('star')[i].style.left = starLeft + 'px';
		}

	}

var timer = null;
var countDownNumber = 10;
var randomNum = Math.round(Math.random()*10);
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
			
			console.log('randomNum', randomNum);

			if (randomNum > 5) {
				changeState(4); //well done!
			} else{
				changeState(5);// oh no!! 
			}

		},2000);
		
	}


}
	

