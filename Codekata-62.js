const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
let userInput;
inp.on("line",(data)=>{
    userInput=+data;
    let count=0;
    while (userInput){
        count+=userInput & 1;
        userInput >>=1;
    }
    console.log(count);
})
