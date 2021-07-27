const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];
inp.on("line", (data) => {
    userInput.push(data);
    let arr=userInput[0].split(" ");
    let str=arr[1];
    flag=0;
    for(var i=0;i<arr[0].length-2;i++){
        let j=i+3;
        if(str==arr[1].slice(i,j)){
            flag=1;
            break;
        }
    }
    if(flag===0){
        console.log("no");
        }
    else{
        console.log("yes");
    }
});
