import styles from './Header.module.css'
import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faUser,
    faBagShopping,
    faBars
} from '@fortawesome/free-solid-svg-icons'

function Header() {

    const [menu, setMenu] = useState(false)

    useEffect(() => {

    function handleResize() {
        if(window.innerWidth > 1150){setMenu(false)}
    }

    window.addEventListener("resize", handleResize)

    return () => {
        window.removeEventListener("resize", handleResize)
    }

}, [])

    return (
        <header className={styles.head}>

            <button
                type="button"
                className={styles.menuButton}
                onClick={() => setMenu(!menu)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            <nav
                className={`${styles.toggleNavBar} ${
                    menu ? styles.open : ''
                }`}
            >
                <a href="">New Arrivals</a>
                <a href="">Collection</a>
                <a href="">Objects</a>
                <a href="">Journal</a>
                <a href="">About</a>
            </nav>

            <nav className={styles.navBar}>
                <a href="">New Arrivals</a>
                <a href="">Collection</a>
                <a href="">Objects</a>
                <a href="">Journal</a>
                <a href="">About</a>
            </nav>

            <h1 className={styles.title}>AESTHETE</h1>

            <div className={styles.menu}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faBagShopping} />
            </div>

        </header>
    )
}

export default Header