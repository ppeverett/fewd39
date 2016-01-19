// var q = "What was your best marathon time?";
// prompt(q);
//
// var answer = ["return(q)"];
//
// var x = answer;
// if(x>2 && x<=4){
//   alert("That time is excellent");
// } else if(x>=4 && x<=5){
//   alert("That time was average")
// } else {
//   alert("That time was too slow")
// };

var response = prompt("What was your best marathon time?");

if (response > 4 && response <=5) {
  alert("Time was average");
} else if (response > 2 && response <=4) {
  alert("Time was excellent");
} else if (response > 5) {
  alert("Speed up!");
} else {
  alert("Please enter a correct time.");
}
