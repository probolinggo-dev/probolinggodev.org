const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const ua = require('useragent');
const path = require('path');
const schema = require('./server/schema');

function isBot(userAgent) {
  const agent = ua.is(userAgent);
  return !agent.webkit && !agent.opera && !agent.ie && !agent.chrome && !agent.safari && !agent.mobile_safari && !agent.firefox && !agent.mozilla && !agent.android;
}

const app = express();
const buildPath = path.join(__dirname, 'build');
const PORT = process.env.PORT || 5000;

const server = new ApolloServer(schema);
server.applyMiddleware({ app });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(buildPath));

app.get('*', async (req, res) => {
  if (!isBot(req.headers['user-agent'])) {
    res.sendFile(path.join(buildPath, 'index.html'));
  } else {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      // we need to override the headless Chrome user agent since its default one is still considered as "bot"
      await page.setUserAgent('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36');

      const localUrl = ('http://localhost:').concat(PORT).concat(req.originalUrl);
      await page.goto(localUrl, {
        waitUntil: 'networkidle0',
      });

      const html = await page.evaluate(() => {
        return document.documentElement.innerHTML;
      });

      res.send(html);
    } catch (e) {
      console.log(e);
      res.send('ERROR');
    }
  }
});
app.listen(PORT);
