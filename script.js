//declaring variables
var startScreen = document.querySelector('.start');
var quizScreen = document.querySelector('.quiz');
var endScreen = document.querySelector('.end');
var startButton = document.querySelector('#start-btn');

//timer
var timer = document.getElemtntByID("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesup");
var startTime = 90;

//Quiz choice button variables
var choice1 = document.getElementById("btn0");
var choice2 = document.getElementById("btn1");
var choice3 = document.getElementById("btn2");
var choice4 = document.getElementById("btn4");
var checkAnswer = document.getElementById("checkAnswer");
var correctAnswers = 0;
var questionNumber = 0;

//ending and high score
var initialInput = document.getElementById("intitialInput");
var initialBtn = document.getElementById("intitialBtn");
var results;
var highScoreBtn = document.getElementById("highScoreBtn");
var highScores = document.getElementById("highScores");

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

initialBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var initialValue = document.querySelector("#initials").value;

    if (initials ==="") {
        displayMessage("error", "Initials cannot be blank");
    } else {
        displayMessage("success", "High score registered successfully");
    
    localStorage.setItem("initials", initialValue);
    localStorage.setItem("highScore", highScoreValue);

    renderLastRegistered();
    }
})
function saveScore() {
    var data = {
        user: user.value,
        score: score.value,
        initials: initials.value,
    }



var userScore = JSON.parse(localStorage.getItem("userScore")) || [];
userScore.push(data);
}
function init () {
    showStart();
}

init();