// PROGRAM TO ADD FIRST N WHOLE NUMBERS 

let n = prompt("ENTER N");
n = Number.parseInt(n);
let sum = 0;

for (let i = 0; i<=n ; i++) {
    sum = sum+i;
}
console.log("Sum of First N WHOLE NUMBER is = "+ sum)