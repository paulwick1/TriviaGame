//question info
var numberQuestions = 10;
var correctAnswers = ["","d","c","b","d","d","d","d","a","c","d"];
var actualchoices = [];
var numCorrect = 0;
var numWrong = 0;
var numBlank = 0;
var score = 0;


function gradeit(){
var incorrect=null
for (q=1;q<=numberQuestions;q++){
    var thequestion=eval("document.myquiz.question"+q)
    for (c=0;c<thequestion.length;c++){
        if (thequestion[c].checked==true)
        actualchoices[q]=thequestion[c].value
        }
    }

    if (correctAnswers[1] == actualchoices[1])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[2] == actualchoices[2])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[3] == actualchoices[3])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[4] == actualchoices[4])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[5] == actualchoices[5])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[6] == actualchoices[6])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[7] == actualchoices[7])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[8] == actualchoices[8])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[9] == actualchoices[9])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    if (correctAnswers[10] == actualchoices[10])
    numCorrect = numCorrect + 1
    else
    numWrong = numWrong + 1

    document.getElementById("gradeQuiz").innerHTML =
    '<p>Number Correct: '+ numCorrect +'</p>' +
    "<p>Number Wrong: "+ numWrong + "</p>" +
    '<p>Reload the page to restart the game!</p>';
    
    numCorrect = 0;
    numWrong = 0;

}
//countdown timer
window.onload = function () {
    var timerLength = 60 * 1.5,
        display = document.querySelector('#time');
    startTimer(timerLength, display);
};

function startTimer(duration, display) {
var timer = duration, minutes, seconds;
setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        gradeit;
    }
}, 1000);

}

// window.onload = function () {
//     var timerLength = 60 * .15,
//         display = document.querySelector('#time');
//     startTimer(timerLength, display);
// };