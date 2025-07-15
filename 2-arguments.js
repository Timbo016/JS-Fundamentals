const args = process.argv.slice(2);
const numberOfArguments = args.length;

if(numberOfArguments === 0){
    console.log("No Argument");
}
else if(numberOfArguments === 1){
    console.log("Argument Found");
}
else {
    console.log("Arguments Found");
}
