
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;
inp.on("line", (data) => {
  a=data;
  let tmp1=[];
  let i=0;
  while(i<a.length){
      if(a[i]!=a[i+1]){
          tmp1.push(a[i]);
          i+=1;
      }
      else{
          i+=2;
      }
  }
  if(tmp1.length>0){
      console.log(tmp1.join(""));
  }
  else{
      console.log(-1);
  }
});
