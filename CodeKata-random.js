const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput1=[];
inp.on("line", (data) => {
    userInput1.push(data);
    userInput=userInput1[0].split(" ");
    result=[];
    finalResult=[];
    for(var i=0;i<userInput.length;i++){
        if(userInput[i]===userInput[i+1]){
            i++;
        }
        else{
            result.push(userInput[i]);
        }
    }
    for(var j=0;j<result.length;j++){
        if(result[j]===result[j+1]){
            j++;
        }
        else{
            finalResult.push(result[j]);
        }
    }
    console.log(finalResult.join(" "));
});
