// Create a Javascript program to find the largest among four numbers using nested if-else statements. 

let a=prompt("Enter the Value 1");
let b=prompt("Enter the Value 2");
let c=prompt("Enter the Value 3");  

if(a>b) {
    if(a>c){
        console.log(a + " is Largest Among All");
    }
}
else if(b>a) {
    if(b>c) {
        console.log(b + " is Largest Among All");
    }
}
else if(c>a) {
    if(c>b) { 
        console.log(c + " is Largest Among All");
    }
}