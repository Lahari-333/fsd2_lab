// Arrow Function
var greet = function () {
    console.log("Welcome to TypeScript");
};
greet();
// Arrow Function with Parameters
var add = function (a, b) {
    return a + b;
};
console.log("Addition:", add(10, 20));
// Arrow Function with One Parameter
var square = function (num) {
    return num * num;
};
console.log("Square:", square(5));
// Arrow Function with Default Parameter
var welcome = function (name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello", name);
};
welcome("Lahari");
welcome();
// Arrow Function with Optional Parameter
var student = function (name, age) {
    console.log("Name:", name);
    if (age !== undefined) {
        console.log("Age:", age);
    }
    else {
        console.log("Age not provided");
    }
};
student("Sai", 20);
student("Lahari");
// Arrow Function with Rest Parameters
var total = function () {
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
};
console.log("Total:", total(90, 80, 95));
console.log("Total:", total(50, 60));
//shorthand arrow function
var roomno = function (room) { return room; };
console.log(roomno(313));
