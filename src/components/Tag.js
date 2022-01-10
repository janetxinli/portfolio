import React from "react";
import styles from "../styles/components/Tag.module.scss";

const Tag = ({ content }) => (
  <article className={styles.tag}>
    <p>{content}</p>
  </article>
);

export default Tag;
