//A Simple Hello World
console.log("Hello World");


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  let str="";
  let str1="";
  for(var i=1;i<a.length+1;i++){
      if(i%2===0){
          str1+=a[i-1];
      }
      else{
          str+=a[i-1]
      }
  }
  console.log(str+" "+str1);
});
