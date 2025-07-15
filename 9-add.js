// Define the add function as required by the prototype
function add(a, b) {
  // Convert arguments to numbers. If conversion results in NaN,
  // addition with NaN will naturally result in NaN, fulfilling the requirement.
  const numA = Number(a);
  const numB = Number(b);
  return numA + numB;
}

// Get the command-line arguments, excluding 'node' and the script name
const args = process.argv.slice(2);

// Get the first and second arguments
const arg1 = args[0];
const arg2 = args[1];

// Call the add function with the arguments and print the result
console.log(add(arg1, arg2));
