const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
let a;
inp.on("line", (data) => {
  a=data;
    console.log(a[0]+a[2]);
});
