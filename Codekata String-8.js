const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
var a;
inp.on("line",(data)=>{
    a=data;
    var str='';
    var count;
    var arr=["a","e","i",'o','u','A','E','I','O','U']
    for(var i=0;i<a.length;i++){
         count=0;
         for(var j=0;j<arr.length;j++){
             if(a[i]==arr[j]){
                 count+=1
             }
         }
         if(count>0){
             str+=""
         }
         else{
             str+=a[i]
         }

    }
    if(str.length!==0){
        console.log(str)
    }
    else{
        console.log(-1)
    }
})
