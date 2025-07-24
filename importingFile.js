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


// ! Exercise 10:
// ! 10.1: Set language
// Your code here (localLangConfig is provided to get you started):

// Simulated language configuration (change this variable to test)
const localLangConfig = null; // Change to 'es', 'fr', etc., or leave it `null`.\
const lang = localLangConfig || 'en';
console.log(lang)

// ! 10.2: Set website theme
// Your code here (`savedUserTheme` is provided to get you started):

// Simulated user theme preference (change this variable to test)
const savedUserTheme = null; // Change to 'dark', etc., or leave it `null`.

const theme = savedUserTheme || 'light';
console.log(theme)

// ! Exercise 11:

// Starting code (don't modify this):

const adventurer = {
    name: 'Alice',
  };
  
  // Your code here:
  console.log(adventurer.cat?.age)