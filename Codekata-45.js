const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
let a;
inp.on("line",(data)=>{
    a=data;
    let str='';
    for(var i=a.length-1;i>=0;i--){

        str+=a[i];
    }
    console.log(str);

});
