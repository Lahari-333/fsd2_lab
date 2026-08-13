var age = 20;
var marks = 95.5;
var year = 2026;
console.log("Age:", age);
console.log("Marks:", marks);
console.log("Year:", year);
// String
var studentName1 = "Lahari";
var college = "SVECW";
var course = "AIML";
console.log("Name:", studentName1);
console.log("College:", college);
console.log("Course:", course);
console.log("My name is ".concat(studentName1, " and I study ").concat(course, "."));
// Boolean
var isStudent = true;
var isPlaced = false;
console.log("Is Student:", isStudent);
console.log("Is Placed:", isPlaced);
// Mixed Types
var studentName = "Sai";
var studentAge = 21;
var passed = true;
console.log("Name: ".concat(studentName, ", Age: ").concat(studentAge, ", Passed: ").concat(passed));
// Function
function studentDetails(name, age, passed) {
    console.log("Student Name:", name);
    console.log("Age:", age);
    console.log("Passed:", passed);
    if (passed) {
        console.log("".concat(name, " has passed the exam."));
    }
    else {
        console.log("".concat(name, " has failed the exam."));
    }
}
studentDetails("Lahari", 20, true);
studentDetails("Sai", 21, false);
