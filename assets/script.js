
//When a question is answered, the next question is displayed
//time is subtracted from the clock for wrong answers
//The end screen is displayed when the timer reaches 0 or all questions are answered
//at the end it will ask for user inititals for saving scores


//Quiz questions

var questions = [
    {
    number: 1,
    question: "What is a function in JavaScript?",
    answer: "A block of code that executes a task when called upon.",
    options: [
        "A fun party.",
        "A block of code that executes a task when called upon.", 
        "A true or false variable.",
        "Values made up of letters, numbers, or symbols."
        ]
    },
    {
    number: 2,
    question: "A Boolean is a true or false variable.",
    answer: "True.",
    options: [
        "True.",
        "False."
        ]  
    },
    {
    number: 3,
    question: "What is an event listener?",
    answer: "A function in HTML that waits for an event (such as a click) and reacts to it.",
    options: [
        "A function in JavaScript that waits for an event (such as a click) and reacts to it.",
        "Someone who eavesdrops on parties.",
        "A function in HTML that waits for an event (such as a click) and reacts to it.",
        "A base class within which all objects inherit specific properties."

    ]   
    },
    {
    number: 4,
    question: "An array is a container that houses different data types.",
    answer: "True.",
    options: [
        "True.",
        "False."
        ]
    },
    {
    number: 5,
    question: "In JavaScript, what does this '//' mean?",
    answer: "Used at the beginning of a comment.",
    options: [
        "Used at the end of a comment.",
        "Or.",
        "Used at the beginning of a comment.",
        "And."
        ]
    }

]




var startScreen = document.querySelector(".start");
var quizScreen = document.querySelector(".quiz");
var endScreen = document.querySelector(".end");
var startBtn = document.querySelector(".startBtn");
var questionCard = document.querySelector("questionCard");
var index = 0;
var possibleAns = ['1.', '2.', '3.', '4.'];



function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    endScreen.style.display = "none";

}
function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    endScreen.style.display = "none";

    displayQuestion();
}
function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = null;
}

function displayQuestion() {
    var possible = questions[index].possible;
    var pEl = document.createElement('p');
    pEl.textContent = questions[index].text;

    questionCard.innerHTML = null;
    questionCard.appendChild(pEl);

    for (var i =0; i < possible.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.textContent = possible[i];
        questionCard.appendChild(buttonEl);
    }
}
startBtn.addEventListener('click', function(event) {
showQuiz();
});

quizScreen.addEventListener('click', function(event) {
    if (event.target.matches('button')) {
        index++;
        if (questions[index]) {
        return displayQuestion();
        }
        showEnd();
    }
});

function init() {   
    showQuiz();
}

init();

