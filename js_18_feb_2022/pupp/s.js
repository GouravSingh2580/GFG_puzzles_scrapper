const puppeteer = require("puppeteer");

(async ()=>{
    let url="https://www.imdb.com/";
    let browser= await puppeteer.launch({
        headless:false,
        defaultViewport: null,
        args:['--start-maximized' ]
    });
    let page = await browser.newPage();
    await page.goto(url,{waitUntil:"networkidle2"});
    await page.click("#iconContext-menu");
    await page.click("#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > aside > div > div._3bRJYEaOz1BKUQYqW6yb29 > div > div:nth-child(1) > span > div > div > ul > a:nth-child(4) > span");
    await page.click("#lister-sort-by-options")
    await page.click("#lister-sort-by-options > option:nth-child(3)")
})()