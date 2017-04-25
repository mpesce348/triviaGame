
//my variables

var correct = 0;
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
	if (timer ===0) {
		//write code for time out event
		console.log("Time's Up!");
		//is supposed to stop the timer at 0
		$(this).find(timer).stop;
		//hides the question set
		$(".questions").hide();
		//shows the scoreboard
		$("#gameOver").show();
		//append the # of correct anwsers to the div with 
		//id "correct"
		$("#correct").html(correct);
		//appends the # of incorrect anwsers to the div with 
		//the id "incorrect"
		$("#incorrect").html(incorrect);
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
$('[data-command="reset"]').click(function () {    
   window.location.href = window.location.href;
});

startGame();
		


	


