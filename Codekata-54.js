const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let userInput=[];
inp.on("line", (data) => {
   userInput.push(data);
});
inp.on("close",()=>{
   let arr=[];
   for(var i=1;i<userInput.length;i++){
       arr.push(userInput[i].split(" "));
   }
   flag=0
   for(var j=0;j<arr.length;j++){
       for(var k=j+1;k<arr.length;k++){
           if(arr[j][0]==arr[k][1] && arr[j][1]==arr[k][0]){
               flag=1;
           }
       }
   }
   if(flag===0){
       console.log("NO");
   }
   else{
       console.log("YES");
   }
});
