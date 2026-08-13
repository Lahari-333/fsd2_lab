var Employee = /** @class */ (function () {
    function Employee(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.display = function () {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    };
    return Employee;
}());
var emp = new Employee("Lahari", 50000, "AIML");
// Public member
console.log(emp.name);
// Public method
emp.display();
// Private member
// console.log(emp.salary);      // ❌ Error
// Protected member
// console.log(emp.department);  // ❌ Error
