
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a1=[];
let count;

inp.on("line", (data) => {
  a1.push(data);
  data1=a1[0].split(" ");
  a=data1[0];
  b=data1[1];
  let min;
  let max;
  let str="";
  let count=0;
  if(a.length>b.length){
      min=b;
      max=a
  }
  else{
      min=a;
      max=b;
  }
  for(var i=0;i<max.length;i++){
      str+=max[i];
      if(str==min){
          console.log("yes");
          break;
      }
      else{
          count+=1;
      }
  }
  if(count==max.length){
      console.log("no");
  }

});
