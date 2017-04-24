
//my variables

var correct = 0
var incorrect = 0;
var unanwsered= 0;
var timer=60;

// jQuery to hide the questions and scoreboard 
//until the start button is clicked
$(".questions").hide();
$("#gameOver").hide();
$(".timer").hide();

//function to start the game on start-button click
//this also starts the timer
function startGame() {
	$("#startUp").click(function(){
		$(".questions").show();
		decriment();
		setInterval(decriment, 1000);
		anwser(".q1");
		anwser(".q2");
		anwser(".q3");
		anwser(".q4");
		anwser(".q5");
		anwser(".q6");
		anwser(".q7");
		anwser(".q8");
		anwser(".q9");
		anwser(".q10");
	}) 
}

//function count down and display time left
function decriment() {
	$(".timer").show();
	timer--
	// $(".timer").html(timer)

	$(".timer").text(timer);
	//console.log(timer);
	if (timer ==0) {
		//write code for time out event
	}
}
function anwser(element) {
	$(element).click(function(){
		 if ($(this).hasClass("correct")) {
		 correct++
		 $(element).prop("disabled", true)
		 }
		 else {
		 incorrect++
		 $(element).prop("disabled", true)

		 }


	}) 
}

startGame();
		


	


