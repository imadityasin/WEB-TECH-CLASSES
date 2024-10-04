// Ananomous Functions in Javascript.
    // Method is block of code to perform task.
    // Ananmous function is a function which has only function keyword and no function name.
    // We are storing the function in a variable and then we call the variable name.

// Syntax:
    


let add = function(x,y) {
    console.log(x+y);
}
add(100,200);


let greet = function() {
    return "Hello Im a Ananmous Function"
}
console.log(greet());