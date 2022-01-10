import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/components/Layout.module.scss";

const Layout = ({ children }) => (
  <div className={`df df-fc ${styles.layout}`}>
    <Header />
    <main className="container">{children}</main>
    <Footer />
  </div>
);

export default Layout;
