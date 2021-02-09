const quizform = document.querySelector('.quiz-form');
var resultPanel = document.querySelector('.scoreboard');
const correctAnswer = ['B', 'C', 'A', 'D', 'B'];


function myfunction(event) {

    event.preventDefault()

    var userAnswer = [quizform.quiz1.value, quizform.quiz2.value, quizform.quiz3.value, quizform.quiz4.value, quizform.quiz5.value];
    var score = 0;


    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
        score++;
        }
    })

    console.log();
    resultPanel = score;

    if (document.getElementById(choice1-2).checked) {
        score ++;
    }
        else {
            score += 0;
        }
}
/* function simpleQuiz(){


}

function submitAnswer() {


}

var container = document.querySelector('.container');
var form = document.querySelector('quiz-form');
var question = document.querySelector('.ques');
var choices = document.querySelector('.all-choice');
var button = document.querySelector('.submit-btn');
var score = document.querySelector('.scoreboard .score-number')
var qQuantity = document.querySelector('.scoreboard .q-quantity');

var ques, answ;
var choice = [];
var score = 0;
var qQuan = 0;


function simpleQuiz(){


}

function submitAnswer() {

    
}


window.addEventListener('DOMContentLoaded', quizApp);

function quizApp() {
    data = quiz();
    ques = data[0].question;
    choice = [];
    answ = data[0].correct_answer;
    data[0].incorrect_answers.map(choice => choice.push(option));
    console.log(choice, answer);
}

async function quiz() {
    var response ;
    var data = response.json(); 

    //console.log(data.results);
    return data.results;
}

*/