import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.allnav}>
        <h1>Logo</h1>

        <div className={styles.navbar}>
          <NavLink>
            <h3>Navbar</h3>
          </NavLink>

          <NavLink>
            <h3>Navbar</h3>
          </NavLink>
          <NavLink>
            <h3>Navbar</h3>
          </NavLink>
          <NavLink>
            <h3>Navbar</h3>
          </NavLink>
        </div>

        <div className={styles.inputblok}>
          <input type="text" placeholder="serch" />
        </div>

        <div>basket</div>
      </div>
    </div>
  );
};