const fs=require("fs")
let txt=fs.readFileSync("q.txt");
txt=txt.toString();
var res=[];
var s;
var temp=0;
for(let i=0;i<txt.length;i++){
    if(txt[i]!='\n')
    {s+=txt[i]}

    else{
        res.push(++temp);
        res.push(s);
        s="";
    }
}
res[1]=res[1].substring(res[1].length-3)
for(let i=0;i<res.length-1;i+=2){
    console.log(res[i]+" "+res[i+1]);
}

