// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 'tony'

// arrays
let ninjas: string[]; // cant push() as its not initialised 
let moreNinjas: string[] = []; // can push() here 

// wont work
ninjas = [10, 23]

// union types
let mixed: (string|number)[] = []; // can store strings and numbers here using (string|number) union
mixed.push('hello');
mixed.push(20);
mixed.push(false); // wont work 

let uid: string|number // can be string or number

// objects
let ninjaOne: object; // can be any type of object
ninjaOne = { name: 'yoshi', age:30 }

let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}
