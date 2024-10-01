// IF-ELSE NESTED 
let num = prompt("Enter the Number")
if(num>0) {
    console.log(`${num} is a POSITIVE Number`);
    if(num%2==0) {
        console.log(`${num} is a EVEN Number`)
    }
    else{
        console.log(`${num} is a ODD Number`)
    }
}
else if(num<0) {
    console.log(`${num} is a Negative Number`)
}
else if(num==0) {
    console.log(`${num} is neither Positive Nor Negative`);
}
else {
    console.log(`${num} is a Invalid Number`)
}
    