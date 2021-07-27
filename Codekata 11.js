const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
})
const userinput=[];
inp.on("line",(data)=>{
    userinput.push(data);
    data1=userinput[0].split(" ")
    var arr=["a","an","the","A","An","The"]
    var arr1=[]
    for(var i=0;i<data1.length;i++){
        for(var j=0;j<arr.length;j++){
            if(data1[i]==arr[j]){
                arr1.push(data1[i+1])
            }
        }
    }
    console.log(...arr1)
})
