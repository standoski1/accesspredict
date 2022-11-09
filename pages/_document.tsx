import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Kanit&display=swap" rel="stylesheet"/>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
        <link rel="manifest" href="/icons/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
        <meta name="theme-color" content="#2d45a1" />
        <meta charSet="utf-8"/>
        <meta property="og:type" content="website"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="mobile-web-app-capable" content="yes"/>
        <link rel="canonical" href="https://accesspredict.com" />
        <meta name="msapplication-TileColor" content="#2d45a1"/>
        <meta name="language" content="en"/>
        <meta name="distribution" content="global"/>
        <meta name="author" content="accesspredict"></meta>  
        <meta name="twitter:card" content="summary_large_image"></meta> 
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="S0VFRCbm6Z6jK-txpke_W10FlKOCcP5A10qt2QBld9c" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument