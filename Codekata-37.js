
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
  let str="";
  for(var i=0;i<a.length;i++){
      let count=0;
      for(var j=0;j<b.length;j++){
          if(a[i]!=b[j]){
             count+=1;
          }
      }
      if(count==b.length){
          str+=a[i];
      }
  }
  if(str.length>0){
      console.log(str);
  }
  else{
      console.log(-1);
  }

});
