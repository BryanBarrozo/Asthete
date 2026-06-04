import styles from './Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMagnifyingGlass,
    faUser,
    faBagShopping
 } from '@fortawesome/free-solid-svg-icons'

function Header(){
    return(
        <header className={styles.head}>
            <nav className={styles.navBar}>{/*trocar pelo Route*/}
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