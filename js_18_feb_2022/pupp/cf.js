const p=require("puppeteer");
// let answer=[`
// #include <iostream>

// using namespace std;

// int main()
// {
//     int w;
//     cin >> w;
//     if (w % 2 == 0 && w > 2)
//     {
//         cout << "YES" << endl;
//     }
//     else
//     {
//         cout << "NO" << endl;
//     }
//     return 0;
// }`]

(async ()=>{

    try{
    let browser=await p.launch(
        {slowMo:true,
        headless:false,
        defaultViewport: null,
        args:['--start-maximized' ]}
    )
    let page=await browser.newPage();
    await page.goto("https://codeforces.com/enter");
    await page.waitForSelector("#handleOrEmail",{visible:true})
    await page.type("#handleOrEmail","lavacet854")
    await page.type("#password","lavacet854@spruzme.com")
    await page.click("#enterForm > table > tbody > tr:nth-child(4) > td > div:nth-child(1) > input",{delay:2000})

    let page2=await browser.newPage();
    await page2.goto("https://codeforces.com/problemset?order=BY_SOLVED_DESC")
    await page2.click("#pageContent > div.datatable > div:nth-child(6) > table > tbody > tr:nth-child(2) > td.act.dark > span:nth-child(1) > a > img")
    await page2.type(".ace_text-input","hi")
    }
    catch (err){
        console.log(err)
    }
})();