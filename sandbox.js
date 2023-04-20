// explicit types
var character;
var age;
var isLoggedIn;
age = 'tony';
// arrays
var ninjas; // cant push() as its not initialised 
var moreNinjas = []; // can push() here 
// wont work
ninjas = [10, 23];
// union types
var mixed = []; // can store strings and numbers here using (string|number) union
mixed.push('hello');
mixed.push(20);
mixed.push(false); // wont work 
var uid; // can be string or number
// objects
var ninjaOne; // can be any type of object
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
