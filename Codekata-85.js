const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];
inp.on("line", (data) => {
    userInput.push(data);
   let arr=userInput[0].split(" ");
   let arr1=arr[0];
   let arr2=arr[1];
   let number=+arr[2];
   sum=0;
   if(arr1.length==arr2.length){
       for(var i in arr1){
           if(arr1[i]!=arr2[i]){
               sum+=1;
           }
       }
       if(sum==number){
           console.log("yes");
       }
       else{
           console.log("no");
       }
   }
   else{
       console.log("no");
   }
});
