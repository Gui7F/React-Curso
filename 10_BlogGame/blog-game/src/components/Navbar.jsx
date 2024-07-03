import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css"; 
import { useState } from "react";

const Navbar = () => {
  

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        <h1>
          Blog <span>GAMES</span>
        </h1>
      </NavLink>
      <ul className={ styles.links_list }>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cadastrar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
