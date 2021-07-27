const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
const a1=[];
inp.on("line",(data)=>{
    a1.push(data);
    data1=a1[0].split(" ");
    for(var i=0;i<data1.length;i++){
        for(var j=0;j<(data1.length)-i-1;j++){
            if(data1[j][0]>data1[j+1][0]){
                let max=data1[j];
                data1[j]=data1[j+1];
                data1[j+1]=max;
            }
        }
    }
    console.log(...data1);


});
