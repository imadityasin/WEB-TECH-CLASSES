// Calculator Using Functions.

// General Function.
function addition(a,b) {   
        console.log(a+b);
    }

// Ananomous Function.
let substraction = function(a,b) {
    console.log(a-b);
    }
add(100,200);

// Arrow Function.
let multiplication = (a,b) => {
    console.log(a*b);
}
add(300,400);

// Nested Function.


// We are Taking Input from User.
let num1=prompt("Enter Number 1: ");
let num2=prompt("Enter Number 2: ");

// We are calling methods Now.
addition(num1,num2);
substraction(num1,num2);
multiplication(num1,num2);