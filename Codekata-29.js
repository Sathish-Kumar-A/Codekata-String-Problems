
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];

inp.on("line", (data) => {
  a.push(data);
  let max=0;
  data1=a[0].split(" ");
  for(var i=0;i<data1.length;i++){
      if(data1[i][0]>=0 && data1[i][0]<=9 ){
          if((+data1[i])>max){
              max=+(data1[i]);
          }
      }
  }
  console.log(max);

});
