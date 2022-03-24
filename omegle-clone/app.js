const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless:false
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://127.0.0.1:5500/index.html');
  // await page.waitForSelector("#videobtn");
  // await page.click("#videobtn")
  // await page.waitForSelector("body > div:nth-child(11) > div > p:nth-child(2) > label > input[type=checkbox]")
  // await page.click("body > div:nth-child(11) > div > p:nth-child(2) > label > input[type=checkbox]")
  // await page.click("body > div:nth-child(11) > div > p:nth-child(3) > label > input[type=checkbox]")
  // await page.waitForSelector("body > div:nth-child(11) > div > p:nth-child(4) > input[type=button]")
  // await page.click("body > div:nth-child(11) > div > p:nth-child(4) > input[type=button]")
  // Takes a screenshot of the whole viewport
  // await page.click("body > div.chatbox3 > div > div > div.logwrapper > div.logbox > div")
  page.on('dialog', async dialog => {
    await dialog.accept();
  });
  await page.screenshot({ path: 'screenshot.png' });

  //await browser.close();
})();