const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput;
inp.on("line", (data) => {
    userInput=data;
    console.log(parseInt(userInput,2).toString(8));
});
