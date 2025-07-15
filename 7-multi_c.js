// Get the command-line arguments, excluding 'node' and the script name
const args = process.argv.slice(2);

// Get the first argument
const firstArg = args[0];

// Attempt to convert the first argument to a number using Number()
// This is stricter than parseInt() and will return NaN for non-numeric strings
const x = Number(firstArg);

// Check if:
// 1. No argument was provided (firstArg is undefined)
// 2. The converted value is not an integer (e.g., '3.14', 'abc')
// 3. The integer is negative
if (firstArg === undefined || !Number.isInteger(x) || x < 0) {
    console.log("Missing number of occurrences"); // This is the first allowed console.log
} else {
    // Loop x times and print "C is fun"
    let i = 0;
    while (i < x) {
        console.log("C is fun"); // This is the second allowed console.log
        i++;
    }
}
