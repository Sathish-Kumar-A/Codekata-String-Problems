const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
})
const userinput=[];
inp.on("line",(data)=>{
    userinput.push(data);
    var a=userinput[0]
    var count=0;
    if(a.length==3){
        for(var i=0;i<a.length;i++){
            for(var j=i+1;j<a.length;j++){
                if(a[i]==a[j]){
                    count+=1
                }
            }
            if(count>0){
                console.log(0)
                break;
            }
        }
        if(count===0){
            console.log(1)
        }
    }
    else{
        console.log(0)
    }
})
