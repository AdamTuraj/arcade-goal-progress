import "@/styles/globals.css";

import { Montserrat } from "next/font/google";

import type { AppProps } from "next/app";
import Head from "next/head";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Arcade Progress Calculator</title>
        <meta
          name="description"
          content="A simple tool to check your progress to your arcade ticket goal"
        />
      </Head>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default App;
