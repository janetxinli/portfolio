import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className={`container df df-ai-c ${styles.header}`}>
      <Link href="/">
        <a
          className={`df df-fc df-ai-c ${
            router.pathname === "/" ? styles.logoHidden : styles.logo
          }`}
        >
          <img src="/pearLogo.png" alt="" />
          <h1>Janet Li</h1>
        </a>
      </Link>
      <nav className="df">
        <Link href="/">
          <a
            href="/"
            className={`${styles.navLink} ${
              router.pathname === "/" ? styles.current : ""
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/about">
          <a
            href="/about"
            className={`${styles.navLink} ${
              router.pathname === "/about" ? styles.current : ""
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/projects">
          <a
            href="/projects"
            className={`${styles.navLink} ${
              router.pathname === "/projects" ? styles.current : ""
            }`}
          >
            Projects
          </a>
        </Link>
        <Link href="/LiJanet_Resume.pdf">
          <a
            href="/LiJanet_Resume.pdf"
            target="_blank"
            className={styles.navLink}
          >
            Resume
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
