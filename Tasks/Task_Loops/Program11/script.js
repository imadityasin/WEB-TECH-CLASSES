// Write a Javascript program that takes a number as input and prints whether it is positive, 
// negative, or zero

let a=prompt("Enter a Number to Find it is Positive or Negative");

if(a>0) {
    console.log(a + " IT IS A POSITIVE NUMBER");
}
else if(a<0) {
    console.log(a + " IT IS A NEGATIVE NUMBER");
}
else if(a==0) {
    console.log(a + " IT IS ZERO (NOR NEGATIVE OR POSITIVE)");
}
else{
    console.log("Invalid Input")
}