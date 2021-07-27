const readline=require("readline");
const inp=readline.createInterface({
    input:process.stdin
})
const userinput=[];
inp.on("line",(data)=>{
    userinput.push(data);
    })
inp.on("close",()=>{
    var str1=userinput[0]
    var a=+(userinput[1])
    var b=+(userinput[2])
    var str=[]
    for(var j=0;j<str1.length;j++){
        str.push(str1[j])
    }
    if(a===1){
       var i=b-1
       while(i<str.length){
           str[i]=str[i].toLowerCase()
           i+=b
       }
       var f=''
    for(var k=0;k<str.length;k++){
        f+=str[k]
    }
    console.log(f)
    }
    else if(a===2){
        var e=b-1
       while(e<str.length){
           str[e]=str[e].toUpperCase()
           e+=b
       }
       var t=''
    for(var u=0;u<str.length;u++){
        t+=str[u]
    }
    console.log(t)
    }


})
