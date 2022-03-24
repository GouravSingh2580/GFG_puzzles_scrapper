let url="https://www.geeksforgeeks.org/"
const cheerio=require("cheerio")
const request=require("request")
let query="puzzles";

url=url+query;
//console.log(url)
request(url,function(err,res,html){
    if(err){
        console.log(err)
    }
    else{
        getpuzzle(html);
    }
})

function getpuzzle(html){
    const $=cheerio.load(html);
    
    $('.entry-content ol li').each(function(i,v) {
        console.log($(this).text());
    });
}