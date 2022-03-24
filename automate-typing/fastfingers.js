const puppeteer = require("puppeteer");

async function main() {
  const browser = await puppeteer.launch({ 
    headless: false, 
    slowMo: 8,
    defaultViewport: null,
    args:['--start-maximized' ]
   });
  const page = await browser.newPage();

  const link = "https://10fastfingers.com/typing-test/english";

  await page.goto(link, { waitUntil: "networkidle0" });

  await page.focus("#inputfield");

  const ongoing = async () =>
    await page.evaluate(() => {
      const words = document.querySelector("#words");
      return words.style.display != "none";
    });

  await page.waitForSelector("#words");
  while (await ongoing()) {
    await page.focus("#inputfield");
    const word = await page.evaluate(() => {
      const currentWord = document.querySelector("#row1 > span.highlight");
      if (currentWord != null) {
        return currentWord.innerText;
      }
      return "";
    });
    await page.keyboard.type(word != "" ? word + " " : word);
  }
  await page.waitForSelector("#wpm > strong");
  const wpm = await page.evaluate(() => {
    return document.querySelector("#wpm > strong").innerText;
  });

  console.log(wpm);
}

main();
