import React from "react";
import Tag from "./Tag";
import styles from "../styles/components/ToolList.module.scss";

const ToolList = ({ toolList }) => (
  <section className={styles.toolList}>
    <div className={`df ${styles.list}`}>
      {toolList.map((t) => (
        <Tag key={t} content={t} />
      ))}
    </div>
  </section>
);

export default ToolList;
