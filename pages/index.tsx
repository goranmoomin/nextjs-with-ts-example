import Head from "next/head";
import Image from "next/image";
import { LinkButton } from "../components/LinkButton";
import { Logo } from "../components/Logo";
import { Toolbar } from "../components/Toolbar";
import { InlineSpacer } from "../components/Spacer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header-container">
        <h1 className="logo">
          <Logo />
        </h1>
        <nav>
          <Toolbar />
        </nav>
        <nav>
          <LinkButton href="#" variant="button" color="hsla(0,0%,100%,0.4)">
            Sign in
          </LinkButton>
        </nav>
      </div>
      <div className="hero-container">
        <div>
          <div className="gradient"></div>
          <h1 className="header-text">
            Payments infrastructure for the internet
          </h1>
          <p className="description-text">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <div className="link-container">
            <LinkButton href="#" variant="button" color="#0a2540">
              Some Text
            </LinkButton>
            <InlineSpacer size={16} axis="horizontal" />
            <LinkButton href="#" variant="link" color="#0a2540">
              Some More Text
            </LinkButton>
          </div>
        </div>
        <div className="demo-graphic">
          <Image
            src="/스크린샷 29-2021-06 13.59.06.png"
            width={800}
            height={800}
            alt=""
          />
        </div>
      </div>
      <style jsx>{`
        h1 h2 h3 h4 h5 h6 p div {
          font-family: sohne-var, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        }
        .header-container {
          margin: 0 84px;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          margin: 0;
          padding-left: 16px;
        }
        .hero-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          max-width: 1080px;
          margin: auto;
        }
        .header-text {
          font-size: 94px;
          line-height: 1.04;
          font-weight: 600;
          min-width: calc(100% + 100px);
          letter-spacing: -0.04em;
          padding-left: 16px;
        }
        .description-text {
          padding-left: 16px;
          padding-right: 32px;
          line-height: calc(5 / 3);
          color: #425466;
        }
        .link-container {
          padding-left: 16px;
          padding-right: 32px;
        }
        .gradient {
          position: absolute;
          top: -11vw;
          width: 100vw;
          left: 0;
          z-index: -1;
          transform: skewY(-12deg);
          height: 70vh;
          background: #eee;
          /*background: radial-gradient(
                #ffcb57 23%,
                rgba(255, 203, 87, 0) 67% 100%
              )
              385px -24px,
            radial-gradient(#ff333d 0, rgba(255, 51, 61, 0) 60% 100%) -940px 290px,
            radial-gradient(#90e0ff 10%, rgba(144, 224, 255, 0) 60% 100%) -120px
              250px,
            radial-gradient(#ff333d 40%, rgba(255, 51, 61, 0) 57% 100%) 495px -44px,
            radial-gradient(#a960ee 30%, rgba(169, 96, 238, 0) 67% 100%) 122px -120px,
            radial-gradient(#a960ee 10%, rgba(169, 96, 238, 0) 60% 100%) -420px 120px,
            radial-gradient(#90e0ff 15%, rgba(144, 224, 255, 0) 50% 100%) -620px
              0,
            radial-gradient(#90e0ff 25%, rgba(144, 224, 255, 0) 50% 100%) 520px -250px,
            #a960ee;*/
        }
        .demo-graphic {
          position: absolute;
          right: 0;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
