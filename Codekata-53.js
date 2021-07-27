// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    let count=0;
   for(var i=1;i<a.length-1;i++){
       if(a[i]==a[i+1]){
           console.log("yes");
           break;
       }
       else{
           count+=1;
       }
   }
   if(count==a.length-2){
       console.log("no");
   }
});
