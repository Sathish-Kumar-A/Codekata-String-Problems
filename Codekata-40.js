
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  let tmp1=[];
  for(var j=0;j<a.length;j++){
      tmp1.push(a[j]);
  }
  let i=1;
  while(i<tmp1.length){
      let tmp=tmp1[i-1];
      tmp1[i-1]=tmp1[(i-1)+1];
      tmp1[(i-1)+1]=tmp;
      i=i+2;
  }
  console.log(tmp1);
});
