const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
   let tmp=[];
   let r=[];
   let a1="kabali";
   let count=0;
   for(var t=0;t<a1.length;t++){
       r.push(a1[t]);
   }
   let s=(r.sort()).join("");
   for(var i=1;i<a.length;i++){
       tmp.push(a[i]);
   }
   let res=[];
   for (var j=0;j<tmp.length;j++){
       let tmp1=[];
       for(var k=0;k<tmp[j].length;k++){
           tmp1.push(tmp[j][k]);
       }
       tmp1.sort();
       let str=tmp1.join("");
       res.push(str);
   }
   for(y=0;y<res.length;y++){
       if(s==res[y]){
           count+=1;
       }
   }
   console.log(count);
});
