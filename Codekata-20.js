const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
var a1;
inp.on("line",(data)=>{
    a1=data;
    let res=0;
    for(var i=0;i<a1.length;i++){
        res+=1;
    }
    console.log(res);


});
