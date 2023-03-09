import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.allnav}>
        <h1>Logo</h1>

      <div className={styles.Navbar}>  <h2>Navbar</h2></div>

        <div className={styles.inputblok}>
          <input type="text" placeholder="serch" />
        </div>

        <div>basket</div>
      </div>
    </div>
  );
};
