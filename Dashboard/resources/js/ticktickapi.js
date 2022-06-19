const puppeteer = require('puppeteer');
const password = ("Indie876");
const p2 = "hi";

puppeteer.headless = false;
// use npm install puppeteer & cheerio to install node dependencies

async function getInfo() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://ticktick.com/signin')
    await page.waitForTimeout(4000);
    console.log("Reached Sign in")
    await page.type('#emailOrPhone', 'ashtonvati@icloud.com');
    await page.type('#password', 'Ashton');
    await page.click('#app > div > div > div.cardSection__UNNlC > section:nth-child(1) > button')
    console.log("Reached App")
    await page.waitForTimeout(5000);
    await page.screenshot({path: 'screenshots/final1.png'});
    const tasks = await page.$x('//*[@id="task-list-content"]/div/li[1]', el => tasks.textContent);
    console.log(tasks);
    await browser.close();
    };

// Getting infomation from element one using css selector path

getInfo()


    

// get info then create alexa announcement in the morning
// contact ifttt api to use code in applet