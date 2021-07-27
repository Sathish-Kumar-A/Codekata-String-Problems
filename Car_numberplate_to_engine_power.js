const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=data;
    var b=a.slice(-4,a.length+1);
    var sum1=0;
    for(var i=0;i<b.length;i++){
        sum1+=+(b[i])
    }
    var sum=(+(a[2]))+(+(a[3]))+sum1
    console.log(sum)
})
