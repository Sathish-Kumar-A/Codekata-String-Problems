const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let input;
inp.on("line", (data) => {
   input=data;
   let data1=+ input;
   let userInput=[];
   for(var i=0;i<input.length;i++){
       userInput.push(input[i]);
   }
   //Insertion Sort
   for(var j=0;j<userInput.length;j++){
       let k=j-1;
       let key=userInput[j];
       while(k>=0 && key>userInput[k]){
           userInput[k+1]=userInput[k];
           k-=1;
            }
        userInput[k+1]=key;
   }
   console.log(userInput.join(""));
});
