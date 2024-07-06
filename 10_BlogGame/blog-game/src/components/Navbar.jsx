import { NavLink } from "react-router-dom";

import styles from "./navbar.module.css"; 
import { useState } from "react";

//hooks
import { useAuthentication } from "../hooks/useAthentication";
//Valor do usuário vindo contexto (custom-hook do contexto)
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {user} = useAuthContext();
  const {logout} = useAuthentication();

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
        {!user && (
          <>
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
          </>
        )}
        {user && (
           <>
           <li>
           <NavLink
             to="/posts/create"
             className={({ isActive }) => (isActive ? styles.active : "")}
           >
             Criar Post+
           </NavLink>
         </li>
         <li>
           <NavLink
             to="/dashboard"
             className={({ isActive }) => (isActive ? styles.active : "")}
           >
             Seus Posts
           </NavLink>
         </li>
           </>
        )}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}><i className="bi bi-box-arrow-right"></i></button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
