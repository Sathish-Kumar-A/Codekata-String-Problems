const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput;
inp.on("line", (data) => {
   userInput=data;
   sum=0
   for(var i=0;i<userInput.length;i++){
       sum+=(+userInput[i])*(+userInput[i]);
   }
   console.log(sum);
});

  
