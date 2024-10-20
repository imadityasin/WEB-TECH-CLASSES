// PROGRAM TO ADD FIRST N NATURAL NUMBERS 

let n = prompt("Enter N")
n=Number.parseInt(n);

let sum=0

for(let i=1; i<=n ; i++) {
    sum = sum+i;
}
console.log(sum);