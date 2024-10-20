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

for (let a in student) {
    console.log("Marks of " + a + " are " + student[a])
}