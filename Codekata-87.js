const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput;
inp.on("line", (data) => {
    userInput=data;
    if((+(userInput.slice(0,2)))>=1 && (+(userInput.slice(0,2)))<=31 && userInput[2]==="/" && (+(userInput.slice(3,5)))>=1 && (+(userInput.slice(3,5)))<=12 && userInput[5]==="/"){
        console.log("yes");
    }
    else{
        console.log("no");
    }

});
  
