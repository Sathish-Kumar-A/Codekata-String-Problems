const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
});
const userInput=[]
inp.on("line",(data)=>{
    userInput.push(data);
})
inp.on("close",()=>{
    flag=0;
    for(var i=1;i<userInput.length;i++){
        for(var j=0;j<userInput[i].length;j++){
            if(userInput[i][j]==userInput[0][2]){
                console.log("yes");
                flag=1;
                break;
            }
        }
        if(flag===1){
            break;
        }
    }
    if(flag===0){
        console.log("no");
    }

});
