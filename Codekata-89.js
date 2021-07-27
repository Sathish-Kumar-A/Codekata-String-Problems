const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput1=[];
inp.on("line", (data) => {
    userInput1.push(data);
    let arr=userInput1[0].split(" ");
    let char=arr[1];
    let flag=0;
    let index;
    for(var x=0;x<arr[0].length;x++){
        if(arr[0][x]==char){
            flag=1;
            index=x;
            break;
        }
    }
    if(flag===0){
        console.log(-1);
    }
    else{
        console.log(index);
    }
   });
