// Get the command-line arguments, excluding 'node' and the script name
const args = process.argv.slice(2);

// Get the first argument
const firstArg = args[0];

// Attempt to convert the first argument to an integer
// parseInt will parse a string until it hits a non-numeric character,
// or return NaN if the string doesn't start with a number.
const number = parseInt(firstArg);

// Check if the conversion resulted in a valid number
// isNaN(number) checks if the result is "Not a Number".
// Also check if the original string was empty or if it was just whitespace,
// as parseInt('') or parseInt('   ') would result in NaN.
if (isNaN(number) || firstArg === undefined) {
    console.log("Not a number");
} else {
    console.log(`My number: ${number}`);
}
