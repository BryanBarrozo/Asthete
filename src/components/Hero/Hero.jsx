import styles from "./Hero.module.css"

import heroImg from '../../assets/images/heroImg.jpg'


function Hero(){
    return(
        <section className={styles.hero} style={{backgroundImage: `url(${heroImg})`}}>{/*Tom Crew */}
        
            <span>NEW SEASON 2026</span>

            <h2>Defining the Art <br/>of Quiet Living.</h2>

            <p>Curated essentials for the modern home.</p>

            <div className={styles.buttons}>
                <button type="button" className={styles.shopButton}>Shop Collection</button>
                <button type="button" className={styles.storyButton}>Read Our Story</button>
            </div>

        </section>
    )
}

export default Hero