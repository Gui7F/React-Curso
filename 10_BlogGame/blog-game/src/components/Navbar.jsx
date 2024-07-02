import {NavLink} from 'react-router-dom'

import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" styles={styles.brand}>
          Blog <span>GAMES</span>
          <ul className={styles.links_list}>
            <li><NavLink to={"/"}className={({isActive}) =>(isActive? styles.active : "")}>Home</NavLink></li>
            <li><NavLink to={"/about"}className={({isActive}) =>(isActive? styles.active :"" )}>About</NavLink></li>
          </ul>
        </NavLink>
    </nav>
  )
}

export default Navbar
