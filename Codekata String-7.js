const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=data;
    var sum=0;
    var arr=["a","e","i","o","u","A","E","I","O","U"]
    for (var i=0;i<a.length;i++){
        for (var j=0;j<arr.length;j++){
            if(a[i]==arr[j]){
               sum+=a.charCodeAt(i)
            }
        }
    }
    if(sum%8===0){
        console.log(1)
    }
    else{
        console.log(0)
    }
})
