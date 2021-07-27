const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput;
inp.on("line", (data) => {
   userInput=data;
   let middle=Math.floor(userInput.length/2);
   if((userInput[0]==="A" || userInput[0]==="a") && (userInput[middle]==="M" || userInput[middle]==="m") && (userInput[userInput.length-1]==="Z" || userInput[userInput.length-1]==="z")){
       console.log(1);
   }
   else{
       console.log(0);
   }
});
