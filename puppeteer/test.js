const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ffecdafabffabebcfadeaceafdfba.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h1');
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ffecdafabffabebcfadeaceafdfba.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h3');
    const result = await page.evaluate(()=>{
      let heading = document.querySelector("#heading");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ffecdafabffabebcfadeaceafdfba.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('input');
    const result = await page.evaluate(()=>{
      let button = document.querySelector("#submitButton");
      return button.innerHTML;
    })
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ffecdafabffabebcfadeaceafdfba.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('button');
    const result1 = await page.evaluate(()=>{
      let textBox = document.querySelector("#nameTextBox");
      return textBox.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let textBox = document.querySelector("#yourRatingTextBox");
      return textBox.innerHTML;
    })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ffecdafabffabebcfadeaceafdfba.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('img');
    const result1 = await page.evaluate(()=>{
      let textBox = document.querySelector("#countryTextBox");
      return textBox.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let textBox = document.querySelector("#awardsTextBox");
      return textBox.innerHTML;
    })
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-ffecdafabffabebcfadeaceafdfba.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const result1 = await page.evaluate(()=>{
      let textBox = document.querySelector("#noOfEpisodeTextBox");
      return textBox.innerHTML;
    })
    const result2 = await page.evaluate(()=>{
      let textBox = document.querySelector("#descriptionTextBox");
      return textBox.innerHTML;
    })
    console.log('TESTCASE:testcase6:success');
  }
  catch(e){
    console.log('TESTCASE:testcase6:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();