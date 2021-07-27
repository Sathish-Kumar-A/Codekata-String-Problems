const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
    let tmp=[];
    for(var j=0;j<a[0].length;j++){
        let n=a[0].charCodeAt(j);
        //console.log(n);
        let s=n+3;
        if(s>90){
            s=s-90;
            s=64+s;
            tmp.push(String.fromCharCode(s));
        }
        else{
            tmp.push(String.fromCharCode(s));
        }
    }
    console.log(tmp.join(""));
});
