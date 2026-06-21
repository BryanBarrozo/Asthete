import styles from './NewArrivals.module.css'

import ProductCard from '../../../../components/ProductCard/ProductCard'

function NewArrivals(){

    const src1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBP9Ig9-6DVTIf7r-lkqilT45A7FdVRVz7m53qFE7Mo0AVAOt02iHGa50koGg9H2EMn-6AyICSv00KXhiWDgpQD7nl1JoHJekc39_Yuv4Tp5bGD2_-OfQVnsCwpaIL7wxolCiq0QVIqhtPGackFNa6qaRuKNjhcJxzumTIaGrEFHEEwnFW0IVFLt0rhCEG4Y1eJhWAY-_0ZNIusuULKM3Gi3RZ7MUxB3A7fCiccNidKUnpmt4RC_r9KCB4keOJXp1ESuPEM3_WnEvsZ"
    
    const src2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBzgwXvHCeyAgjvJmErhIkjIPSR7CscFXWzWVt5_7_UQq8vZ270C8lIHAYqegoznU0dKo4dzPgB_KUS4FGZAYVEEhVda7xCCjQ1GhXJmAt1yERs3KGSGA_DWCMpXC5FoAwm7Pv9u2G3URavybntl5fK7xfd7S219ym6ObgmaKaKgA-HSEoWoptA2EYmJpMUB0lp5vzJR0JmmQXNo4VY0vitq7sGOX45HQg3jCvZHu_wdt2aIzn84dMjjppgy3qxxpo7--71Pee3Cjs8"

    const srcMain ="https://lh3.googleusercontent.com/aida-public/AB6AXuA9tG6koMJXBe0oqtt_BcVNIFCyKaO2aQ41HggMZW7QcChOjpzfHpKwqwVLA8oDHukgDYpWja5RN4R3IewxEttF9QpbEIy4bKssv2OxiafOe3Zloc7Pn5P5OhRRT_a49swDrdwpq46mL5G7NMLCQtjV5uTob5INW0DP7XM_bKlpu0qiKm4KU5u01cDPab4JZSJjws8EiMj5qN1DWPYr8jpC49DMCJmYzLBIulPc3jtJctALMBA9uJsll5Gs5e8mvNG4c9GWIEeU8Q0N"

    //temporario ate api
    return(
        <section className={styles.container}>
            
            <div className={styles.header}>
                <div className={styles.title}>
                    <h2>New Arrivals</h2>
                    <p>Curated essentials for the modern home.</p>
                </div>
                <a href="">VIEW ALL</a>
            </div>

            <div className={styles.containerItems}>
                <article className={styles.mainItem}>
                    <img src={srcMain} alt="descrição da image" />
                    <div>
                        <h3>Monolith Lounge Chair</h3>
                        <span>$1,250.00</span>
                    </div>
                </article>

                <div className={styles.items}>
                    <ProductCard name="Noir Scented Tapers" value="45,00" src={src1} alt="descrição da img"/>
                    <ProductCard name="Noir Scented Tapers" value="45,00" src={src2} alt="descrição da img"/>
                </div>
            </div>
        </section>
    )
}


export default NewArrivals