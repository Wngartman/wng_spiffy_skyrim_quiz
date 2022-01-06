
var currentQuestionIndex = 0
var start = document.getElementById("start");
var questionEl = document.getElementById("question");
var countdown = document.getElementById("countdownId")
var questions = document.getElementById("questions")
var choice = document.getElementById("choices")
var allChoices = document.getElementsByClassName("choices")
var hide = style = "display:none"
var myScore = timeLeft

var questionArr = [{
    question: "This is a dumb question",
    choices: ["Yes", "No", "Maybe", "Yeah"],
    answer: 2,
},
{
    question: "Another dumb question",
    choices: ["Yes", "For", "Sure", "Yeah"],
    answer: 3
}
]






questions.style.display = "none";
countdownId.style.display = "none";

function startQuiz() {
    start.style.display = "none";
    countdownId.style.display = "block";
    countdownTimer()
    firstQuestion()
}

function firstQuestion() {
    questions.style.display = "block";
    questionEl.textContent = questionArr[currentQuestionIndex].question
    // if (currentQuestionIndex = )
    var choices = questionArr[currentQuestionIndex].choices
    var answer = questionArr[currentQuestionIndex].answer

    
    
    
    
    for (var i = 0; i < choices.length; i++) {
        var choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choices1");
        choiceButton.setAttribute("value", choices[i]);

        choiceButton.textContent = i + 1 + "." + choices[i];

        choice.appendChild(choiceButton);
        choiceButton.addEventListener('click', function (i) {
            if (i == answer) {
                $(".choices1").remove()
                questionArr.shift()
                firstQuestion()
            } else {
                $(".choices1").remove()
                subtractTime()
                firstQuestion()
            }
        }.bind(null, i))
    };
}

var timeLeft = 60;
function countdownTimer() {

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        timeLeft--;
        countdown.textContent = timeLeft + " seconds remaining"

        if (timeLeft === 0) {
            countdownId.textContent = "";
            clearInterval(timeInterval);
            endGame()
        }
    }, 1000);
}

function subtractTime() {

    if (timeLeft >= 15) {
        timeLeft -= 15
    } else {
        timeLeft = 0
        endGame()
    }
}

function endGame(){

    $("#question").remove()
    $(".choices1").remove()
    localStorage.setItem('mostRecentScore', timeLeft)
    window.location.href = "file:///C:/Users/wngar/Documents/UCF/in_class/homework/wng_spiffy_skyrim_quiz/scoreboard/scoreboard.html?initials=";
}
