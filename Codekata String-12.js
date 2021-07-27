// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
var a;

inp.on("line", (data) => {
  a=data
  var arr=["a","e","i","o","u","A","E","I","O","U"]
   var count=0;
  var count1=0;
  for(var i=0;i<a.length;i++){
      for(var j=0;j<arr.length;j++){
          if(a[i]==arr[j]){
              count+=1;
          }
          else{
              count1+=1
          }
      }
  }
  if(count>0){
          console.log("yes");
      }
  else if(count===0 && count1>0){
          console.log("no")
      }
});
