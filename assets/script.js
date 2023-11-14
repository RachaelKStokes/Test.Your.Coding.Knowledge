
//When a question is answered, the next question is displayed
//time is subtracted from the clock for wrong answers
//The end screen is displayed when the timer reaches 0 or all questions are answered
//at the end it will ask for user inititals for saving scores


//Quiz questions

let questions = [
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





let question_count = 0;
let question_number = 1;
let userScore = 0;
let widthValue = 0;

const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const next_btn = document.querySelector("footer .next_btn");
const bottom_question_counter = document.querySelector("footer .total_questions");

// if Next Question button clicked
next_btn.addEventListener = ()=>{
    if(question_count < questions.length - 1){ //if question count is less than total question length
        question_count++; //increment the que_count value
        question_number+ //increment the que_numb value
        showQuestions(question_count); //calling showQestions function
    }else{
        showResult(); //calling showResult function+
    }
}

// getting questions and options from array
function showQuestions(index){
    const question_text = document.querySelector(".question_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let question_tag = '<span>'+ questions[index].number + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    question_text.innerHTML = question_tag; //adding new span tag inside question_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("addqueryselector", "optionSelected(this)");
    }
}

//if user clicked on option
function optionSelected(answer){

    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[question_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
            }
        }
    }
}
function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}




