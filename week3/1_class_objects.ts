class Employee {
    name: string;
    designation: string;
    salary: number;

    // Constructor Signatures
    constructor(name: string);
    constructor(name: string, designation: string, salary: number);

    // Constructor Implementation
    constructor(name: string, designation?: string, salary?: number) {
        this.name = name;
        this.designation = designation ?? "Trainee";
        this.salary = salary ?? 25000;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Designation:", this.designation);
        console.log("Salary:", this.salary);
        console.log("----------------------");
    }0
}

// Object Creation

const emp1 = new Employee("Lahari");
const emp2 = new Employee("Sai", "Software Engineer", 60000);

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