import Document, { Head, Main, NextScript } from 'next/document'; // eslint-disable-line no-unused-vars
import { ServerStyleSheet } from 'styled-components';
import stylesheet from '../sass/app.scss';

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" />
          <link rel="icon" type="image/png" href="/static/assets/favicon-128.png" sizes="128x128" />
          <link rel="icon" type="image/png" href="/static/assets/favicon-192.png" sizes="192x192" />
          <title>Probolinggo Dev</title>
          {this.props.styleTags}
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
