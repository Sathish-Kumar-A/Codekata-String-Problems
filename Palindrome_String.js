const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=data;
    var p="";
    for (var i=a.length-1;i>=0;i--){
        p+=a[i]
    }
    if(a===p){
       console.log(1) 
    }
    else{
        console.log(0)
    }

})
