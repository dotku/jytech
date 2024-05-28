import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://getbootstrap.com/docs/5.3/dist/css/bootstrap.min.css"
          integrity="sha384-whatever-integrity-checksum"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Component {...pageProps} />
        <Script src="//getbootstrap.com/docs/5.3/assets/js/color-modes.js" />
      </body>
    </>
  );
};

export default MyApp;
