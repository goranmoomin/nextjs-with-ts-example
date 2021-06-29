import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: sohne-var;
          src: url(https://b.stripecdn.com/mkt/assets/d5dd9f5d.woff2)
            format("woff2-variations");
          font-weight: 1 1000;
          font-display: block;
          unicode-range: U+0000-007e;
        }
        @font-face {
          font-family: sohne-var;
          src: url(https://b.stripecdn.com/mkt/assets/c6e75166.woff2)
            format("woff2-variations");
          font-weight: 1 1000;
          font-display: block;
          unicode-range: U+007f-ffff;
        }
        @font-face {
          font-family: SourceCodePro;
          src: url(https://b.stripecdn.com/mkt/assets/1a930247.woff2)
              format("woff2"),
            url(https://b.stripecdn.com/mkt/assets/ac6713d5.woff) format("woff");
          font-weight: 500;
          font-style: normal;
          font-display: block;
        }
      `}</style>
    </>
  );
}
export default MyApp;
