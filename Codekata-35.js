
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;

inp.on("line", (data) => {
  a=data;
  if(a==="saturday" || a==="sunday"){
      console.log("yes");
  }
  else{
      console.log("no");
  }

});
