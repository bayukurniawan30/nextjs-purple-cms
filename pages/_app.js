import "../css/style.css";
import Head from "next/head";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title></title>
        <meta
          name="Description"
          content=""
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
