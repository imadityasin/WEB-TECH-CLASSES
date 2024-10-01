// Write a Javascript program that takes an age as input and determines if a person is 
// a child (age < 12), a teenager (age between 13 and 19), 
// an adult (age between 20 and 59), or a senior (age 60 and above). 

let age=prompt("Enter age");

switch(age) {
    case age<=12:
        console.log(age + " Child")
        break

    case age<=13 && age>=19:
        console.log(age + " Teenager")
        break

    case age<=20 && age>=59:
        console.log(age + "Adult");
        break

    case age<60:
        console.log(age + " Senior Citizen")
        break
    
    default:
        console.log("Not Accepted")
}