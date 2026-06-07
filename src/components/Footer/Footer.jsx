import styles from './Footer.module.css'


function Footer(){
    return(
        <footer className={styles.container}>
            <div className={styles.rowInfo}>
                <h2>AESTHETE</h2>
                <p>Elevating the everyday through intentional <br/>design and uncompromising quality.</p>
                <p>&copy; 2026 AESTHETE. All rights reserved.</p>
            </div>
            <div className={styles.links}>
                <div className={styles.rowInfo}>
                    <h3>Store Info</h3>
                    <a href="">Shipping</a>
                    <a href="">Stockists</a>
                    <a href="">Terms</a>
                </div>
                <div className={styles.rowInfo}>
                    <h3>Social</h3>
                    <a href="">Instagram</a>
                    <a href="">Pinterest</a>
                </div>
            </div>
            

        </footer>
    )
}

export default Footer