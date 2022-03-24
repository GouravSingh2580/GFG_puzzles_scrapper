const url="https://www.espncricinfo.com/series/west-indies-in-india-2021-22-1278661/india-vs-west-indies-3rd-t20i-1278681/ball-by-ball-commentary"
const fs=require("fs")
const request=require("request")
const cheerio=require("cheerio")

request(url, function (error, response, html) {
    if(error){
        console.error('error:', error);
    }
    else{
        handlehtml(html);
        //console.log(html);
    }
});

function handlehtml(html){
    let $= cheerio.load(html);
    let h1s=$(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    let text=$(h1s[0]).text();
    console.log(text)
}