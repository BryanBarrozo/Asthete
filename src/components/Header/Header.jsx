import styles from './Header.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
                <Link>New Arrivals</Link>
                <Link to='/collection'>Collection</Link>
                <Link>Objects</Link>
                <Link>Journal</Link>
                <Link>About</Link>
            </nav>

            <nav className={styles.navBar}>
                <Link>New Arrivals</Link>
                <Link to='/collection'>Collection</Link>
                <Link>Objects</Link>
                <Link>Journal</Link>
                <Link>About</Link>
            </nav>

            <h1 className={styles.title}> <Link to="/">AESTHETE</Link></h1>

            <div className={styles.menu}>
                <Link><FontAwesomeIcon icon={faMagnifyingGlass}/></Link>
                <Link to='/register'><FontAwesomeIcon icon={faUser}/></Link>
                <Link><FontAwesomeIcon icon={faBagShopping} /></Link>
            </div>

        </header>
    )
}

export default Header