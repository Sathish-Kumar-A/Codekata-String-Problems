const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
let a;
inp.on("line",(data)=>{
    a=data;
    let count=0;
    for(var i=0;i<a.length-1;i++){
        if(a[i]==a[i+1]){
            console.log("yes");
            break;
        }
        else{
            count+=1;
        }
    }
    if(count==a.length-1){
        console.log("no");
    }
});
