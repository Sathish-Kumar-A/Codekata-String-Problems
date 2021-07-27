const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
let a;
inp.on("line",(data)=>{
    a=data;
    let str='';
    let sum=0;
    for(var i=0;i<a.length;i++){
        let count=0;
        if(+a[i]===1){
            for(var j=i;j<a.length;j++){
                count+=1;
            }
            let power=Math.pow(2,count-1);
            sum+=power;
        }


    }
    let div=(Math.floor(sum/16)).toString();
    let rem=(sum%16).toString();
    console.log(div+rem);


});
