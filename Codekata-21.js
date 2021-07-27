const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
var a1;
inp.on("line",(data)=>{
    a1=data;
    let res="";
    for(var i=a1.length-1;i>=0;i--){
        res+=a1[i];
    }
    if(a1==res){
        console.log("yes");
    }
    else{
        console.log("no");
    }

});
