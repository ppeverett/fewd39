var score = 0;
document.querySelector("#increase-5").addEventListener("click", function(){
  score+=5;
  changeScore();
});

// this can be written in multiple lines too
document
  .querySelector("#decrease-5")
  .addEventListener("click", function(){
    score-=5;
    changeScore();
});

document
.querySelector("#submit-custom-score")
.addEventListener("click", function(){
  var custScore = document.querySelector("#custom-score").value;
  score = parseInt(custScore);
  //score=custScore

  document.querySelector("#custom-score").value = "";

  changeScore();
});

function changeScore() {
  if (score <0) {
    return false;
  } else {
    document.querySelector("#score").textContent = score + " Points";
    }
}
