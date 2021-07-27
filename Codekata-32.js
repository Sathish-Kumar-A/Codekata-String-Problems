
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  let tmp=0;
  for(var i=0;i<a.length-2;i++){
      if(a[i]==a[i+1] && a[i]==a[i+2]){
          tmp+=1;
      }
  }
  console.log(tmp);

});
