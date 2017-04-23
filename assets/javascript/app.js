
//my variables

var intervalId;
var correct = 0
var incorrect = 0;
var unanwsered= 0;
var timer;

// jQuery to hide the questions and scoreboard 
//until the start button is clicked
$(".questions").hide();
$("#gameOver").hide();
$(".timer").hide();

//function to start the game on start-button click
//this also starts the timer
function startGame() {
	$("#startUp").click(function(){
		$(timer).setTimeout(1000*60);
		$(".timer").append(timer);
		$(".questions").show();
		console.log("hello");
	}) 
		
		
	
}

