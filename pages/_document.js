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
          <meta name="google-site-verification" content="aD0AzsX7ARZ8BvPN_mzQoEnU3qRPZKv7QMquC1iBVpc" />
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
