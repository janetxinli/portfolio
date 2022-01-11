import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/common/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="author" content="Janet Li" />
        <meta
          name="description"
          content="Janet is a Bioinformatics Masters student at UBC interested in bioinformatics software development and data visualization"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
