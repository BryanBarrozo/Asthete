import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

import styles from './ProductPage.module.css'

function ProductPage(){
    return(
        <>
        <Header/>
        <main>
        <img src="" alt="" />
        <section>
            <h2>Nome do produto</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam corrupti maxime, minus dolore culpa natus itaque voluptatibus perferendis nisi omnis, deleniti porro animi doloribus explicabo facilis quas? Dolorum, vero? descrição do produto</p>

            <button>ADD TO BAG</button>
            <button>ADD to wish list</button>{/*icone de coração */}
        </section>
        </main>
        <Footer/>
        </>
    )
}