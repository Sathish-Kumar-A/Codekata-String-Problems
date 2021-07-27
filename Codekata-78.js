const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const userInput=[];
inp.on("line", (data) => {
    userInput.push(data);
    let arr=userInput[0].split(" ");
    let position=(+arr[1]+(+arr[2]))-1
    console.log(arr[0][position]);
});
