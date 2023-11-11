var StartScreen = document




function showStart (){

}

function showQuiz(){

}

function showEnd(){
    StartScreen.style.Sheets.display = "none";
    quizScreen.style.display = "none";
    endScreen.style.display = null;

}

startButton.addEventListener('click', function(event) {
    showQuiz();
});

function init (){
    showStart();
}