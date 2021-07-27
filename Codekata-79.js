const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput;
inp.on("line", (data) => {
    userInput=data;
    hash={};
    result="";
    let min=userInput.length;
    for(var i=0;i<userInput.length;i++){
        if(userInput[i]!==" "){
            hash[userInput[i]]=hash[userInput[i]]+1 || 1;
        }
    }
    for(var key in hash){
        min=Math.min(min,hash[key])
    }
    for(var j=0;j<userInput.length;j++){
        if(hash[userInput[j]]==min){
            result+=userInput[j];
            hash[userInput[j]]-=1;
        }
    }
    console.log(result);
});
