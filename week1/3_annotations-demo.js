// Variable Annotations
var studentName = "Lahari";
var age = 20;
var isStudent = true;
// Array Annotations
var marks = [90, 95, 88];
var subjects = ["Math", "Science", "English"];
// Function Parameter & Return Type Annotations
function calculateAverage(scores) {
    var sum = 0;
    for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
        var score = scores_1[_i];
        sum += score;
    }
    return sum / scores.length;
}
function displayStudent(name, age, isStudent) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Student:", isStudent);
}
displayStudent(studentName, age, isStudent);
console.log("Subjects:", subjects);
console.log("Marks:", marks);
var average = calculateAverage(marks);
console.log("Average:", average);
// Type Safety Check
var salary = 50000;
// salary = "50000";      
// age = true;            
// marks.push("100");     
salary = 60000;
marks.push(99);
console.log("Updated Salary:", salary);
console.log("Updated Marks:", marks);
