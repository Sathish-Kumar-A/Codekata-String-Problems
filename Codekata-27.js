
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];

inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  let obj={};
  for(var i=0;i<data1.length;i++){
      if(obj[data1[i]]){
          obj[data1[i]]+=1;
      }
      else{
          obj[data1[i]]=1;
      }
  }
  let max=0;
  let maxstr;
  for(var prop in obj){
      if(obj[prop] > max){
          max=obj[prop];
          maxstr=prop;
      }
  }
  console.log(maxstr,max);

});
