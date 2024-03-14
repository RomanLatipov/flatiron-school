/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations

// ~ Types
// -> undefined, null*, boolean, number, string

// ~ Objects
// -> definition, bracket/dot notation, stringify

// ~ Arrays
// -> definition, access, modification

// ~ Conditionals
// if, if-else, if-else-if-else, ternary

// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

// ~ Scope
// -> global, local, closures, function hoisting

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.

const cube = {
    height: 2,
    width: 4,
    volume: 8,
    color: "blue",
    "full-name": "bob"
}
console.log(cube);
console.log(cube.volume);
cube.volume = 10;
console.log(cube.volume);

/*
*@paran {string} name
*@param {string} mood
*/

function sayHello(name, mood) {
    return "Hello, " + name + ". I'm " + mood +"!";
}
console.log(sayHello("sakib", "happy"));

const cities = ["Chicago", "New York", "Toronto", "Los Angeles", "Detroit"];
cities.forEach(city => console.log("I went to " +  city));

cities.forEach((city, i) => {
    console.log("I went to " + city + " at the index " + i);
});

const arr = [1,2,3,4];
function sum(arr) {
    let sumOfNums=0;
    for(let i=0; i<arr.length; i++) {
        sumOfNums+=arr[i];
    }
    return sumOfNums;
}

function double(arr) {
    for(let i=0; i<arr.length; i++) {
        arr[i]*=2;
    }
    return arr;
}

function lowercase(arr) {
    for(let i=0; i<arr.length; i++) {
        arr[i]=arr[i].toLowerCase();
    }
    return arr;
}

const mycat = "rose"
function isCute() {
    const x = " hello";
    innerFunc();
    function innerFunc() {
        console.log(mycat+x);
    }
}
isCute();