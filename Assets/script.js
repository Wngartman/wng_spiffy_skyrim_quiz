

var start = document.getElementById("start");
var question = document.getElementById("question");
var countdown = document.getElementById("countdownId")
var questions = document.getElementById("questions")
var questionArr = ["This is a question", "This is another question"]
var hide = style="display:none"

questions.style.display = "none";
countdownId.style.display = "none";

function startQuiz() {
    
    start.style.display = "none";
    countdownTimer()
    firstQuestion()
}
function firstQuestion() {
    questions.style.display = "block";
}

function countdownTimer() {
    var timeLeft = 60;

    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        timeLeft--;
        countdown.textContent = timeLeft + " seconds remaining"

        if (timeLeft === 0) {
            countdown.textContent = "";
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

function subtractTime() {

}
