
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a=[];

inp.on("line", (data) => {
  a.push(data);
  let tmp=[];
  data1=a[0].split(" ");
  for(var i=0;i<data1.length;i++){
      let s="";
      if(i%2===0){
          for(var j=0;j<data1[i].length;j++){
              s+=data1[i][j].toUpperCase();
          }
          tmp.push(s);
      }
      else{
          tmp.push(data1[i])
      }
  }
  console.log(...tmp);
});
