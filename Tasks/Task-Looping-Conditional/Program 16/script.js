// USE FOR LOOP AND PRINT COMPLETE MULTIPLICATION TABLE OF USER CHOICE 

let x = prompt("Enter a Number");
x=Number.parseInt(x);           // Converting bcz prompt always take string as input.

for(let i= 1; i<=10 ; i++) {
    console.log(x + " * " + i + " = " + x*i)
}