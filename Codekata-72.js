const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput;
inp.on("line", (data) => {
   userInput=data;
   hash={};
   for(var i=0;i<userInput.length;i++){
       hash[userInput[i]]=hash[userInput[i]]+1 || 1;
   }
   max=hash[userInput[0]];
   for( var k in hash){
       if(hash[k]>max){
           max=hash[k];
       }
   }
   console.log(max);
});

  
