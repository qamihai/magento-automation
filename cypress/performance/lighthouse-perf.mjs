import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';

const url = 'https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html';

const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
const runnerResult = await lighthouse(url, options);
const reportDir = 'cypress/performance';

// Save HTML report
const reportHtml = runnerResult.report;
fs.writeFileSync(path.join(reportDir, 'lighthouse-report.html'), reportHtml);

// Log performance score and response time
const perfScore = runnerResult.lhr.categories.performance.score * 100;
const responseTime = runnerResult.lhr.audits['interactive'].displayValue;
console.log(`Performance score: ${perfScore}`);
console.log(`Time to Interactive: ${responseTime}`);

await chrome.kill();