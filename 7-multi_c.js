// Get the command-line arguments, excluding 'node' and the script name
const args = process.argv.slice(2);

// Get the first argument
const firstArg = args[0];

const x = parseInt(firstArg);


if (isNaN(x) || x < 0 || firstArg === undefined) {
    console.log("Missing number of occurrences");
} else {
    
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
}
