
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  let str="";
  let sum=0;
  for(var i=0;i<a.length;i++){
      if(+(a[i]>=0 && (+(a[i]<=9)))){
          sum+=+(a[i]);
      }
      else{
          str+=a[i];
      }
  }
  console.log(str+sum);



});
