import React from "react";
import styles from "../styles/pages/index.module.scss";

export default function Home() {
  return (
    <div className="vertical-center-parent">
      <article className={styles.welcome}>
        <h2>Hello! I&apos;m Janet.</h2>
        <img src="./me.jpg" alt="Janet at the Art Gallery of Ontario" />

        <section className={`df df-ai-c df-jc-c ${styles.text}`}>
          <p>
            I&apos;m Bioinformatics Masters student and aspiring full stack
            bioinformatics software developer. I&apos;m passionate about the
            complex world of genomics and want to build tools for analyzing and
            visualizing biological data.
          </p>
        </section>
      </article>
    </div>
  );
}
