import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="NAV Jobb Utforsker" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="preconnect" href="https://fonts.googleapis.com&display=optional" crossOrigin="use-credentials" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"
            rel="stylesheet"
          />
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
