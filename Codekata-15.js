const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
})
const userinput=[];
inp.on("line",(data)=>{
    userinput.push(data);
})
inp.on("close",()=>{
    data1=userinput[0].split(" ")
    data2=userinput[1]
    var count=0;
    for (var i=0;i<data1.length;i++){
        if(data2==data1[i]){
            count+=1
        }
    }
    if(count>0){
        console.log(count)
    }
    else{
        console.log(-1)
    }
})
