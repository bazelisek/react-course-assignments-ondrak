let age: number = 11;
age = parseInt("1");

let hobbies: string[][] = [["das"], ["was"]];

type Person = {name: string, age: number};

let person: Person;

person = {
    age: 32,
    name: "Bob",
}

let people: Person[];

let course: string | number = "React course";
course = 12346;

function add(a: number, b: number) {
    return a + b;
}

function myPrint(value: any) {
    console.log(value);
}


function insertAtBeginning<T extends number | string>(arrray: T[], value: T) {
    const newArray = [value, ...arrray];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, 2);