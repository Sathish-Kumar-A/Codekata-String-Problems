// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    data1=a[0].split(" ");
    let x=a[1];
    let y=[];
    for(var i=0;i<data1.length;i++){
        if(data1[i]!=x){
            y.push(data1[i]);
        }
    }
    console.log(y.join(" "));
});
