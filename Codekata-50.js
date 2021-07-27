// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  let x=data1[0];
  let y=data1[1];
  let count=0;
  for(var i=0;i<x.length-(y.length-1);i++){
      let str="";
      for(var j=i;j<i+(y.length);j++){
          str+=x[j];
      }
      if(str==y){
          console.log("yes");
          break;
      }
      else{
          count+=1;
      }
  }
  if(count==x.length-(y.length-1)){
      console.log("no");
  }
});
