// any
var value = 10;
console.log(value);
value = "Hello";
console.log(value);
value = true;
console.log(value);
// unknown
var data = "TypeScript";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
// void
function greet(name) {
    console.log("Welcome " + name);
}
greet("Lahari");
