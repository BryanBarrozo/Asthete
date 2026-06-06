import styles from './ProductCard.module.css'


function ProductCard({name, value, src, alt}){
    return(
        <article className={styles.card}>
            <img src={src} alt={alt} />
            <div className={styles.text}>
                <h3>{name}</h3>
                <p>$ {value}</p>
            </div>
        </article>
    )
}

export default ProductCard