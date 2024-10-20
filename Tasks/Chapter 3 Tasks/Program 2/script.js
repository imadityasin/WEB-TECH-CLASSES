    /*
Write a program to print the marks of a student in an object using for loop.
obj = {
    harry: 97,
    sahil: 23,
}
    */

let student = {
    Harry: 78,
    Sahil: 55,
    Animesh: 23,
    Aditya: 56,
    Abhishek: 44,
}

for (let i = 0; i < Object.keys(student).length ; i++) {
    console.log("The Marks of " + Object.keys(student)[i] + " are " + student[Objects.keys(student)[i]])
}