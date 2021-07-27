// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let arr=userInput[0].split(" ");
  if(arr[0]==arr[1]){
      console.log("yes");
  }
  else{
      console.log("no");
  }
});
