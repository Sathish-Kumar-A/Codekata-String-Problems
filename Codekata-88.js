const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput1=[];
inp.on("line", (data) => {
    userInput1.push(data);
   });
inp.on("close",()=>{
    let min;
    let userInput=userInput1[0].split(" ");
   if(userInput[0].length<userInput[1].length){
       min=userInput[0].length;
   }
   else{
       min=userInput[1].length;
   }
    let result=userInput[0].slice(0,min)+userInput[1].slice(0,min);
    console.log(result);

});
  
