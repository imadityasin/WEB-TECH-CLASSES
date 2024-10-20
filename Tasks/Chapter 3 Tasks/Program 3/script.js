// WRITE A PROGRAM TO PRINT "TRY AGAIN" UNTIL USER ENTERES THE CORRECT NUMBER.

let cn =  4;
let i;

while(i!=cn) {
    i=prompt("Enter Number: ")
    console.log("Try Again !!");
}
console.log("Number Matched "+ i + " == " + cn);