import name, { computer, age, job } from './exportingFile.js';

console.log(name, computer, age, job);

// ! Exercise 8:

// Your code here:

function logSent(noun = "cat", adjective = "orange") {
    return `The ${noun} is ${adjective}`
}

console.log(logSent())

// ! Exercise 9:

// Starting code (don't modify this):

const pizza = 'tasty';

// Your code here:

let reaction = pizza === "tasty" ? "yum" : "yuck"
console.log(reaction)


