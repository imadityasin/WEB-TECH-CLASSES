// Conditional Statements

let a = prompt("Hey Whats your age ?");     // prompt takes input in string format.
a = Number.parseInt(a);                     // Converting String to Number.
if (a<0) {
    console.log("You Dont Have Voter ID");
}
else if (a>18) {
    console.log("You are Eligible For Vote");
}
else if (a>=7) {
    console.log("You Dont Have Right for Vote now");
}
else {
    console.log("Invalid age")
}