import React from "react";
import Head from "next/head";
import styles from "../styles/pages/index.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Janet Li</title>
      </Head>
      <div className="vertical-center-parent">
        <article className={styles.welcome}>
          <h2>Hello! I&apos;m Janet.</h2>
          <img src="./me.jpg" alt="Janet at the Art Gallery of Ontario" />

          <section className={`df df-ai-c df-jc-c ${styles.text}`}>
            <p>
              I&apos;m a software engineer with a focus on front-end development
              and data visualization. I have experience building full-stack web
              applications and bioinformatics software, and am passionate about
              creating accessible and responsive user interfaces.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
