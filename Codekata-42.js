
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;
inp.on("line", (data) => {
  a=data;
  let str="";
  for(var i=0;i<a.length;i++){
      if(a[i]!="a" && a[i]!="e" && a[i]!="i" && a[i]!="o" && a[i]!="u" && a[i]!="A" && a[i]!="E" && a[i]!="I" && a[i]!="O" && a[i]!="U"){
          str+=a[i];
      }
  }
  let rev='';
  for(var j=str.length-1;j>=0;j--){
      rev+=str[j];
  }
  if(rev.length>0){
      console.log(rev);
  }
  else{
      console.log(-1);
  }
});
