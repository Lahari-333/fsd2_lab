
// Arrow Function

const greet = (): void => {
    console.log("Welcome to TypeScript");
};

greet();

// Arrow Function with Parameters

const add = (a: number, b: number): number => {
    return a + b;
};
console.log("Addition:", add(10, 20));

// Arrow Function with One Parameter

const square = (num: number): number => {
    return num * num;
};

console.log("Square:", square(5));

// Arrow Function with Default Parameter

const welcome = (name: string = "Guest"): void => {
    console.log("Hello", name);
};

welcome("Lahari");
welcome();

// Arrow Function with Optional Parameter

const student = (name: string, age?: number): void => {
    console.log("Name:", name);

    if (age !== undefined) {
        console.log("Age:", age);
    } else {
        console.log("Age not provided");
    }
};

student("Sai", 20);
student("Lahari");

// Arrow Function with Rest Parameters

const total = (...marks: number[]): number => {
    let sum = 0;

    for (let mark of marks) {
        sum += mark;
    }

    return sum;
};

console.log("Total:", total(90, 80, 95));
console.log("Total:", total(50, 60));
//shorthand arrow function
const roomno = (room:number) : number=> room;
console.log(roomno(313));