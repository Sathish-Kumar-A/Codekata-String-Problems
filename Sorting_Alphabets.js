const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
})
inp.on("close",()=>{
    var b=+(a[0]);
    const data1=a[1].split(" ")
    console.log(...(data1.sort()))
})
