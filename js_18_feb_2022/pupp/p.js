const p=require("puppeteer")
console.log("Before")
let page;
let br=p.launch({ 
    headless : false,
    slowMo:true
})
br.then(function (browser){
    let browserPages=browser.pages();
    return browserPages;
}).then(function (browserPages){
    page=browserPages[0]
    return browserPages[0].goto("https://www.google.com/")
}).then(function(){
    return page.waitForSelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",{visible:true})
})
.then(function(){
    let type=page.type("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input","chess")
    return type;
})
.then(function (){
    return page.keyboard.press("Enter")
})
.then(function(){
    return page.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true})
})
.then(function(){
    return page.click(".LC20lb.MBeuO.DKV0Md")
})