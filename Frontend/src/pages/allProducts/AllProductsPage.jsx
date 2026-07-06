import api from "../../services/api";
import styles from "./AllProductsPage.module.css";
import { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/collection");
      setProducts(response.data);
      console.log(response.data);
    } catch {
      alert("Internal Error!");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <ol>
            <li>
              <a href="/">Home</a>
            </li>

            <li aria-current="page">Collection</li>
          </ol>
        </nav>

        <section className={styles.title}>
          <div>
            <h1>Curated Objects</h1>
          </div>

          <p>
            A selection of thoughtfully designed pieces for the modern interior.
            Each object is a study in form, material, and purpose.
          </p>
        </section>

        <div className={styles.content}>
          <aside className={styles.filter}>
            <div className={styles.filterCategory}>
              <h2>CATEGORY</h2>

              <ul className={styles.categoryList}>
                <li>All Objects {products.length}</li>
                <li>Furniture{}</li>
                <li>Clothes{}</li>
                <li>Shoes{}</li>
              </ul>
            </div>

            <div className={styles.filterPrice}>
              <h2>PRICE RANGE</h2>

              {/*colocar estilo de linha do price range */}

              <div className={styles.priceRange}>
                <span>$0</span>
                <span>$2.000+</span>
              </div>
            </div>

            <button className={styles.clearButton} type="button">
              CLEAR FILTERS
            </button>
          </aside>

          <section className={styles.allProducts}>
            <div className={styles.productsHeader}>
              <p>Showing 6 of {products.length} items</p>

              <span className={styles.divider}></span>
            </div>

            <div className={styles.productsGrid}>
              {products.map((item) => (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  value={item.price}
                  src={item.image_url}
                  alt={item.description}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AllProductsPage;
