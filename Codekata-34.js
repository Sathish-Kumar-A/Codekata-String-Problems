const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[];
inp.on("line",(data)=>{
    userInput.push(data);
});
inp.on("close",()=>{
    let arr=userInput[1].split(" ");
    let obj={};
    let arr2=[];
    for(var i=0;i<arr.length;i++){
        obj[arr[i]]=(obj[arr[i]]+1) || 1;
        if(obj[arr[i]]===1){
            arr2.push("verified");
        }
        else{
            arr2.push(arr[i]+"1");
        }
    }
    console.log(arr2.join(" "));
})
