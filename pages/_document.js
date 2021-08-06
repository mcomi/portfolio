import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head>
          <link
              rel="preload"
              href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
              as="script"
          />
          <link
              href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`}
              rel="stylesheet"
          />
      </Head>
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
