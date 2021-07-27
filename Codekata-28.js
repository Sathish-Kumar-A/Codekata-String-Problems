
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];

inp.on("line", (data) => {
  a.push(data);
  data1=a[0].split(" ");
  let a1=data1[0];
  let b=data1[1];
  let res=0;
  if(a1.length==b.length){
      for(var i=0;i<a1.length;i++){
      let count=0;
      for(var j=0;j<b.length;j++){
          if(a1[i]==b[j]){
              count+=1;
          }
      }
      if(count>0){
          res+=1;
      }
  }
  if(res===a1.length){
      console.log(1);
  }
  else{
      console.log(0);
  }
  }
  else{
      console.log(0);
  }

});
