
quest1.style.display = "none";
countdownId.style.display = "none";
var countdown = document.getElementById("countdownId")
var question = document.getElementById("question")
var choice1 = document.getElementById("choice1")

var questionArr = ["This is a question", "This is another question"]

var correctAnswers = [1]

function firstQuestion() {
 question.textContent = questionArr[0].toString();
}
choice1.addEventListener("click", countdownTimer)

function startQuiz() {
    var start = document.getElementById("start");
    var question = document.getElementById("quest1");
    
    if (start.style.display === "none") {
    start.style.display = "block";
  } else {
    start.style.display = "none";
    question.style.display = "block";
    countdown.style.display = "block";
    countdownTimer()
    firstQuestion()
  }
}

function countdownTimer() {
  var timeLeft = 60;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    countdown.textContent = timeLeft + " seconds remaining"

    if(timeLeft === 0) {
      countdown.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

