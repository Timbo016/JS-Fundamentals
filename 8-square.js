// Get the command-line arguments, excluding 'node' and the script name
const args = process.argv.slice(2);

// Get the first argument
const firstArg = args[0];

// Use a regular expression to strictly check if the argument is a positive integer string.
// This means it must contain one or more digits (0-9) from start to end of the string.
const isValidSizeString = /^\d+$/.test(firstArg);

// Check if:
// 1. No argument was provided (firstArg is undefined)
// 2. The argument string is not a pure positive digit string (e.g., '3.14', 'abc', '-5')
if (firstArg === undefined || !isValidSizeString) {
    console.log("Missing size");
} else {
    // Convert the validated string to an integer
    const size = parseInt(firstArg, 10); // Use radix 10 for explicit base

    // Loop for each row of the square
    for (let i = 0; i < size; i++) {
        let row = ''; // Initialize an empty string for the current row
        // Loop to build the string for the current row with 'X' characters
        for (let j = 0; j < size; j++) {
            row += 'X'; // Add an 'X' for each column
        }
        console.log(row); // Print the complete row
    }
}
