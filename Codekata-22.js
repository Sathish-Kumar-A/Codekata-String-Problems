const readline=require("readline");
const inp=readline.createInterface({
   input:process.stdin
});
var a1;
inp.on("line",(data)=>{
    a1=data;
    let a=(a1.slice(0,5)).length;
    let tmp=[];
    for(var k=5;k<9;k++){
        tmp.push(+(a1[k]));
    }
    let count=0;
    let count1=0;
   if(a1.length==10){
       for(var i=0;i<a;i++){
           if(a1.charCodeAt(i)>64 && a1.charCodeAt(i)<91){
               count+=1;
           }

          }
          for(var j=0;j<tmp.length;j++){
              if(tmp[j]>0 && tmp[j]<=9){
                  count1+=1;
              }
          }
          if(a1.charCodeAt(9)>64 && a1.charCodeAt(9)<91){
              count1+=1
          }
          if((count+count1)==10){
              console.log("pan");
          }
          else{
              console.log("not pan");
          }
   }
    else{
              console.log("not pan");
          }

});
