
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  let str='';
  for(var i=0;i<a.length;i++){
      let count=0;
      for(var j=0;j<a.length;j++){
          if(a[i]==a[j]){
              count+=1;
          }
      }
      if(count===1){
          str+=a[i];
      }
  }
  if(str.length>0){
      console.log(str[0]);
  }
  else{
      console.log(-1);
  }

});
