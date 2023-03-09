import React from "react";
import styles from "./Navbar.module.css";
import Navbar from "./../../../.history/src/components/Navbar/Navbar_20230309222019";

export const Navbar = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.allnav}>
        <h1>Logo</h1>

        <h2>Navbar</h2>

        <div className={styles.inputblok}>
          <input type="text" placeholder="serch" />
        </div>

        <div>bas</div>
      </div>
    </div>
  );
};
