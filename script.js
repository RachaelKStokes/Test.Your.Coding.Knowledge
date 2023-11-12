//declaring variables
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var endScreen = document.querySelector('.end');
var startButton = document.querySelector('#start-btn');

//Quiz choice button variables
//var choice1;
//var choice2;
//var choice3;
//var choice4; 
//var checkAnswer 
//var correctAnswers = 0;
//var questionNumber = 0;

//functions for what is shown on the screen
//When a question is answered, the next question is displayed
//time is subtracted from the clock for wrong answers
//The end screen is displayed when the timer reaches 0 or all questions are answered
//at the end it will ask for user inititals for saving scores
function showStart (){
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    endScreen.style.display = "none";
    timeLeft.textContent = startTime;

}

function showQuiz(){
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    endScreen.style.display = "none";

}

function showEnd(){
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = null;

}
//When the start button is clicked, a timer starts and the first question displays
startButton.addEventListener('click', function(event) {
    showQuiz();

});

function init () {
    showStart();
}
init();