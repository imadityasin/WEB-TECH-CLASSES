// Create a Javascript program that takes a character as input and checks 
// if it is a vowel using a if conditional statements

let a = prompt("Enter a Character");
if(a=='a' || a=='e' || a=='i' || a=='o' || a=='u') {
    console.log(a + " It is Vowel");
}
else if(a=='A' || a=='E' || a=='I' || a=='O' || a=='U') {
    console.log(a + " It is Vowel");
}
else {
    console.log("Invalid Input or It is Not a Vowel");
}