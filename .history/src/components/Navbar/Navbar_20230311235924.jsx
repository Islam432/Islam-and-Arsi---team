import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.cont}>
      <form className={styles.allnav}>
       <div className="logo"> <img className={styles} src="./Logo.png" alt="" /> <h1>Logo</h1></div>

        <div className={styles.navbar}>
          <NavLink to={'/'} className={styles.NavLink}>
            <h3>home</h3>
          </NavLink>
          <NavLink to={'/comp'} className={styles.NavLink}>
            <h3>Navbar</h3>
          </NavLink>
          <NavLink className={styles.NavLink}>
            <h3>Navbar</h3>
          </NavLink>
          <NavLink className={styles.NavLink}>
            <h3>Navbar</h3>
          </NavLink>
         
        </div>

        <div className={styles.inputblok}>
          <input type="text" placeholder="serch" />
        </div>

        <div>basket</div>
      </form>
    </div>
  );
};
