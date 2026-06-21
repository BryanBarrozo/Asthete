import styles from './About.module.css'


function About(){
    return(
        <section className={styles.about}>
            <h2>"Luxury is not about abundance, but about the purity of the few things that remain."</h2>

            <p>
                At AESTHETE, we curate objects that stand the test of time. Every piece is selected for its material integrity, functional clarity, and silent beauty. We believe in living with less, but better.
            </p>

            <div className={styles.infoCards}>

                <div className={styles.card}>
                    <h3>100%</h3>
                    <span>SUSTAINABLE MATERIALS</span>
                </div>

                <div className={styles.card}>
                    <h3>Global</h3>
                    <span>CARBON-NEUTRAL SHIPPING</span>
                </div>
            </div>

        </section>
    )
}

export default About