import React from "react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/components/Footer.module.scss";

const Footer = () => (
  <footer className={`container df df-ai-c df-jc-fe ${styles.footer}`}>
    <span>
      <address>
        <a href="mailto:janetxinli@gmail.com">
          <FontAwesomeIcon icon={faAt} className={styles.icon} />
        </a>
      </address>
      <a
        href="https://github.com/janetxinli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/janetxinli/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
      </a>
    </span>
  </footer>
);

export default Footer;
