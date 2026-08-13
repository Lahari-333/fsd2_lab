// Parameter Types
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));
// Explicit Return Type
function square(num) {
    return num * num;
}
console.log("Square:", square(5));
// Default Parameters
function greet(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Welcome", name);
}
greet("Lahari");
greet();
// Optional Parameters
function student(name, age) {
    console.log("Name:", name);
    if (age !== undefined) {
        console.log("Age:", age);
    }
    else {
        console.log("Age not provided");
    }
}
student("Sai", 20);
student("Lahari");
// Rest Parameters
function total() {
    var marks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        marks[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, marks_1 = marks; _a < marks_1.length; _a++) {
        var mark = marks_1[_a];
        sum += mark;
    }
    return sum;
}
console.log("Total:", total(90, 85, 95));
console.log("Total:", total(70, 80));
console.log("Total:", total());
// Testing the Experiment
console.log(add(5, 10));
console.log(square(8));
greet("AIML");
greet();
student("Ravi", 22);
student("Priya");
console.log(total(10, 20, 30, 40));
console.log(total(100));
