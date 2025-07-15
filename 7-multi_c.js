// Get the command-line arguments, excluding 'node' and the script name
const args = process.argv.slice(2);

// Get the first argument
const firstArg = args[0];

// Define a regular expression to check if the string contains ONLY digits
// ^\d+$ means:
// ^    - start of the string
// \d+  - one or more digit characters (0-9)
// $    - end of the string
const isPositiveIntegerString = /^\d+$/.test(firstArg);

// Check if:
// 1. No argument was provided (firstArg is undefined)
// 2. The argument string is not a pure positive digit string (e.g., '3.14', 'abc', '-3')
//    Note: This regex already handles the 'negative' part of the check for us,
//    as "-3" would fail the `isPositiveIntegerString` test.
if (firstArg === undefined || !isPositiveIntegerString) {
    console.log("Missing number of occurrences"); // First allowed console.log
} else {
    // If it passed the string validation, it's safe to convert to an integer
    const x = parseInt(firstArg, 10); // Use radix 10 for explicit base

    // Since the regex `^\d+$` only allows non-negative integers as strings,
    // we only need to print if x > 0. If x is 0, the loop won't run, which is correct (0 times "C is fun").
    let i = 0;
    while (i < x) {
        console.log("C is fun"); // Second allowed console.log
        i++;
    }
}
