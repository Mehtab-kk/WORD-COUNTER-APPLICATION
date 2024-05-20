#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`*********** ---->  Word Counting Application  <---- ***********`);
const asnwer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to Count the Words"
    }
]);
let words = asnwer.Sentence.trim().split(" "); /*using .trim() to avoid counting any white spaces
//                                             using .split() to give alphabets a tarteeb and store in a array */
// now printing array of the words to console by the help of split method
console.log(words);
// printing the word count 
console.log(`Your Word Count for this sentence is ${words.length} `);