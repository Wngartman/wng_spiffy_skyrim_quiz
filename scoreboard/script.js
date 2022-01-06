
var initials = document.getElementById('initials')
var submitScore = document.getElementById('submitScore')
var mostRecentScore = localStorage.getItem('mostRecentScore')
var finalscore = document.getElementById('finalscore')

finalscore.innerText = mostRecentScore
initials.addEventListener('keyup', () => {
  console.log(initials.value)
  submitScore.disabled = !username.value
})

function saveScore() {
  console.log("SavedScore")
}