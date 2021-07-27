// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    data1=a[0].split(" ");
    let y=[];
    let n=data1[0];
    let k=data1[1];
    //Putting n elements in Y array
    for(var i=1;i<a.length;i++){
        y.push(a[i]);
    }
    flag=1;
    //Calculation
    for(var j=0;j<y.length-(k-1);j++){
        let count=0;
        for(var t=j;t<j+k;t++){
            if(y[j]==y[t]){
                count+=1;
            }
        }
        if(count==k){
            console.log("yes");
            flag=0;
            break;
        }

    }
    if(flag===1){
        console.log("no");
    }


});
