const fs=require("fs");
console.log("before");
let c=fs.readFileSync("a.txt");
c.toString('utf8')
console.log(c);
console.log("after");