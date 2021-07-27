const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
let a;
inp.on("line",(data)=>{
    a=data;
    let str='';
    for(var i=0;i<a.length;i++){
        if(a[i]!=" "){
            str+=a[i];
        }
    }
    console.log(str);


});
