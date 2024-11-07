// OBJECTS IN JAVASCRIPT


let emp = {
    empId : 1234,
    empName : "Smith",
    empAge : 30,
    empAvailability : true,
    empSkills : ["html", "css", "javascript"],
    empDob : "23-05-1993",
    empExp : {
        infosys : "4 Years",
        IBM : "1 Year"
    },
    empAddress : null
}


// console.log(emp);
console.log(emp.empName);
console.log(emp.empAvailability);
console.log(emp.empAge);
console.log(emp.empId);
console.log(emp.empSkills[1]);
console.log(emp.empExp.infosys);


// Another way to use Objects
// employee onj

let emp1 = {
    "emp-Id" : 1234,
    "#empName" : "Smith",
    emp$Age : 30,
    emp_Availability : true,
    "emp&Skills" : ["html", "css", "js"];
    "emp@Dob" : "23-05-1992"; 
}