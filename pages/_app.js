import { Raleway } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export default function App({ Component, pageProps }) {
  return (
    <div className={raleway.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
