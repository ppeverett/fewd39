***** Hmwk PART 1 *****

// For Loop v3
for (var i = 0; i<21; i++) {
if (i % 2 === 0) {
 console.log (i + "is even");
}else {
 console.log (i + "is odd");
}}

//For Loop from Class 6
for (var i=0;i<21:i+=2) {
  console.log(i+ " is even");
}

//While Loop

var i=0;

while(i<21) {
  if(i%2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + "is odd");
  }
  i++;
}


***** Hmwk PART 2 *****

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

//Mathmax from Class 6
function max(num1, num2) {
  if (num1 > num2) {
    return num1
  }
 else {
  return num2
}
}
max(1,2);

// Max of three from Class 6
function maxofThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
  maxofThree(4,5,6);
}
