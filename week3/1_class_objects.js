var Employee = /** @class */ (function () {
    // Constructor Implementation
    function Employee(name, designation, salary) {
        this.name = name;
        this.designation = designation !== null && designation !== void 0 ? designation : "Trainee";
        this.salary = salary !== null && salary !== void 0 ? salary : 25000;
    }
    Employee.prototype.display = function () {
        console.log("Name:", this.name);
        console.log("Designation:", this.designation);
        console.log("Salary:", this.salary);
        console.log("----------------------");
    };
    return Employee;
}());
// Object Creation
var emp1 = new Employee("Lahari");
var emp2 = new Employee("Sai", "Software Engineer", 60000);
// Display Details
emp1.display();
emp2.display();
// Using Properties After Object Creation
console.log(emp1.name);
console.log(emp2.salary);
// Updating Property Manually (Post Construction)
emp1.designation = "Junior Developer";
emp1.salary = 35000;
// Display Updated Details
console.log("After Updating");
emp1.display();
