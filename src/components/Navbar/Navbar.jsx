import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from './logologo.png'
export const Navbar = () => {
  return (
    <div className={styles.cont}>
      <form className={styles.allnav}>
      <div className={styles.logo}><img className={styles.logoimg} src={logo} alt="" /> <h1>Organick</h1></div>

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
