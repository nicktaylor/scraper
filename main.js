const puppeteer = require('puppeteer');
const url = 'https://www.racingpost.com';
const fs = require('fs').promises;

puppeteer
    .launch()
    .then(browser => browser.newPage())
    .then(page => page.goto(url).then(() => page.content()))
    .then(html => fs.writeFile("./data/result.html", html)
        .then(() => console.log("COMPLETE!"))
        .then(() => process.exit()))
    .catch(err => console.log(err));
