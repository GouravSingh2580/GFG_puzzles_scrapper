const cheerio=require("cheerio")
const request=require("request")
const fs=require("fs")

request("https://www.niet.co.in/",function(err,res,html){
    if(err){
        console.log(err)
    }else{
        nietdata(html);
    }
})
function nietdata(html){
    let $=cheerio.load(html)
    let p=$("body > div.nit-slider > div.notice-board.niet-padd.clearfix > div > div > div.col-lg-5 > div > div").text()
    p = p.toString().replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "")
    fs.writeFileSync("a.txt",p)
}