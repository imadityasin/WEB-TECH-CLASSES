// Write a Javascript program to find the sum of all even numbers between 1 and 100 using a "for" loop.
let c= 0;
for(let a=0;a<=100;a++) {
    if(a%2==0) {
        c = c+a;
        console.log(c)
    }
}