// Hmwk Part 1

// function printNumbers() {
//   var text = "";
//   var i;
//   for (i=0; i<21; i++){
//     text += "The number is " + i + "<br>";
//   }
//   document.getElementById("demo").innerHTML = text;
// }


// For Loop v1
//  for (i = 0; i<21; i++) {
//    console.log(i);
//
// if(i === 0) {
//   console.log("Null");
// } else if (i & 1){
//   console.log("Odd");
// } else {
//   console.log("Even")
// }
// }

// For Loop v2
// function printNumbers() {
//   var text = "";
//   var i;
//   for (i=0; i<21; i++) {
//     // text += "The number is " + i + "<br>";
//
//     if(i === 0) {
//       text += (i + " is Null" + "<br>");
//     } else if (i & 1){
//       text += (i + " is odd" + "<br>");
//     } else {
//       text += (i + " is even" + "<br>");
//     }
//   }
//   document.getElementById("demo").innerHTML = text;
// }

For Loop v3
for (var i = 0; i<21; i++) {
if (i % 2 === 0) {
 console.log (i + "is even");
}else {
 console.log (i + "is odd");
}}

//While Loop
// function wprintNumbers() {
//   var text = "";
//   var i;
//   while (i) {
//     // text += "The number is " + i + "<br>";
//
//     if(i === 0) {
//       text += (i + " is Null" + "<br>");
//     } else if (i & 1){
//       text += (i + " is odd" + "<br>");
//     } else {
//       text += (i + " is even" + "<br>");
//     }
//   }
//   document.getElementById("demo2").innerHTML = text;
// }

// Hmwk PART 2

// Max part 1
var a= prompt ("enter your first number");
var b= prompt ("enter a second number");
var x = function max(a,b) {
 if (a>b) {
   return(a + " is greater");
 }
 else  {
   return(b + " is greater");
 }
};

  x(a,b);

// Max part 2
var a= prompt ("enter your first number");
var b= prompt ("enter a second number");
var c= prompt ("enter a third number");
var x = function maxofThree(a,b,c) {
 if (a>b && a>c) {
   return(a + " is greater");
 }
 else if (b>c && b>a) {
   return(b + " is greater");
 }
 else if (c>a && c>b) {
   return(c + " is greater");
}}

  x(a,b,c);
