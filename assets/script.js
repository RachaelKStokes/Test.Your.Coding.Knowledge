
//When a question is answered, the next question is displayed
//time is subtracted from the clock for wrong answers
//The end screen is displayed when the timer reaches 0 or all questions are answered
//at the end it will ask for user inititals for saving scores


var startScreen = document.querySelector(".start");
var quizScreen = document.querySelector(".quiz");
var endScreen = document.querySelector(".end");
var startBtn = document.querySelector("#startBtn");
var questionCard = document.querySelector("questionCard");
var index = 0;
//quiz questions
var questions = [
    {
    text:"In JavaScript, what does this '//' mean?",
    answer: '4. Used at the beginning of a comment',
    possible:['1. Used at the end of a comment','2. Or.','3. And.', '4. Used at the beginning of a comment'],
    },
    {
    text: "What is an Array?",
    answer: '1. A container that houses different data types.',
    possible: ['1. A container that houses different data types.', '2. A string of characters.', '3. A set of numbers only.', '4. A container that houses special characters.'],
    },
    {
    text:"What is an Event Listener?",
    answer: '3. A function in JavaScript that waits for an event (such as a click) and reacts to it.',
    possible: ['1. Someone who eavesdrops on parties.', '2. A function in HTML that waits for an event (such as a click) and reacts to it.', 
               '3. A function in JavaScript that waits for an event (such as a click) and reacts to it.', '4. A base class within which all objects inherit specific properties.'],
    },
    {
    text: "What is a Boolean?",
    answer: '2. A true/false variable.',
    possible: [ '1. A string of characters.', '2. A true/false variable.', '3. A function that can be used to create buttons.', '4. A value made up of letters, numbers, and symbols.'],
    },
    {
    text: "What is a function in JavaScript?",
    answer: '3. A block of code that executes a task when called upon.',
    possible: [ '1. A true/false variable.', '2. A fun party.', '3. A block of code that executes a task when called upon.', '4. A container that houses different data types.']
    },
];
    
    

//show one type of screen at a time for a dynamic experience
function showStart() {
    startScreen.style.display = null;
    quizScreen.style.display = "none";
    endScreen.style.display = "none";

}
function showQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = null;
    endScreen.style.display = "none";
//make sure questions are displayed on the correct screen
    displayQuestion();
}
function showEnd() {
    startScreen.style.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = null;
}
//define displayQuestion function
function displayQuestion() {
    var possible = questions[index].possible;
    var pEl = document.createElement('p');
    pEl.textContent = questions[index].text;

 

    for (var i = 0; i < possible.length; i++) {
        var buttonEl = document.createElement('button');
        buttonEl.textContent = possible[i];
       
    }
};


startBtn.addEventListener('click', function(event) {
    showQuiz();
} );

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
    showStart();
}

init();

