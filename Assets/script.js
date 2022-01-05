
quest1.style.display = "none";
countdownId.style.display = "none";
var countdown = document.getElementById("countdownId")
var question = document.getElementById("question")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")
var questionArr = ["This is a question", "This is another question"]

// choice1.addEventListener("click", choice1Func)

// choice1 = 69

// function choice1Func() {
//   choice1 = 5
//   alert('Thanks for clicking!');
// }




function firstQuestion() {
question.textContent = questionArr[0].toString();

choice1.addEventListener("click", function(event) {
	alert('hello');
});

}

function secondQuestion() {
  question.textContent = questionArr[1].toString();
  var answer = [1]
  if (choice1 = 1) {
 
  }
 
 }


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

function subtractTime () {

}
