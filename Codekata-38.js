
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a1;
let count=0;

inp.on("line", (data) => {
  a1=data.toString();

  for(var i=0;i<a1.length;i++){
      if(+(a1[i])>=0 && +(a1[i])<=9){
          count+=1;
      }
  }
  if(count==a1.length){
      console.log("yes");
  }
  else{
      console.log("no");
  }


});
