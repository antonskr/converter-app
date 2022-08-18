import React from 'react';
import styles from './NavBar.module.scss'
import { NavLink } from "react-router-dom";


const NavBar = (): JSX.Element => {
    return (
        <div className={styles.navBar}>
            <nav>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''}
                         to="/currencies">Currencies
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : ''}
                         to="/">Converter
                </NavLink>
            </nav>
        </div>
    )
}

export default NavBar;