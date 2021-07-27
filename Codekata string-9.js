const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=data;
    var str='';
    for(var i=a.length-1;i>=0;i--){
        if(i==a.length-1){
            str+=a[i].toUpperCase()
        }
        else{
            str+=a[i]
        }
    }
    console.log(str)
})
