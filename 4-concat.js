// Get the command-line arguments, excluding 'node' and the script name
const args = process.argv.slice(2);

// Get the first argument. If it's undefined, use the string "undefined".
const arg1 = args[0] === undefined ? "undefined" : args[0];

// Get the second argument. If it's undefined, use the string "undefined".
const arg2 = args[1] === undefined ? "undefined" : args[1];

// Construct the final sentence using template literals
const sentence = `${arg1} is ${arg2}`;

// Print the sentence
console.log(sentence);
