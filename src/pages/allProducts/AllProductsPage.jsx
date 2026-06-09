import styles from './AllProductsPage.module.css'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import ProductCard from '../../components/ProductCard/ProductCard'

function AllProductsPage(){
    return(
        <>
        <Header/>
        <main>
            <div>
                <p>Home &gt; Collection</p>
            </div>
            <div className={styles.title}>
                <h2>Curated Objects</h2>
                <p>A selection of thoughtfully designed pieces for the modern interior. Each object is a study in form, material, and purpose.</p>
            </div>
            <div>
                <aside className={styles.filter}>
                    <h3>CATEGORY</h3>
                    <ul>
                        <li>All Objects</li>
                        <li>Furniture</li>
                        <li>Clothes</li>
                        <li>Shoes</li>
                    </ul>
                    <div>
                        <h4>PRICE RANGE</h4>
                        <div> {/*Filtro de preço*/}
                            <span>$0</span>
                            <span>$2.000+</span>
                        </div>
                    </div>

                    <button type='button'>CLEAR FILTERS</button>
                </aside>
            </div>
            <section className={styles.allProducts}>
                <h3>Showing x of x items</h3>
                <div>
                    <span></span>{/*span para criar uma linha divisiva*/}
                </div>
                {/*Produtos 
                trocar pelo map
                */}
                <div>
                    <ProductCard name={'jose'} value={300} src={'link'} alt={'vasoe de planta'}/>
                    <ProductCard name={'jose'} value={300} src={'link'} alt={'vasoe de planta'}/>
                    <ProductCard name={'jose'} value={300} src={'link'} alt={'vasoe de planta'}/>
                </div>
                <div>
                    <ProductCard name={'jose'} value={300} src={'link'} alt={'vasoe de planta'}/>
                    <ProductCard name={'jose'} value={300} src={'link'} alt={'vasoe de planta'}/>
                    <ProductCard name={'jose'} value={300} src={'link'} alt={'vasoe de planta'}/>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default AllProductsPage
