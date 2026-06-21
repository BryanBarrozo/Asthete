import styles from './PaymentePage.module.css'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import PaymentForm from './componentsPayment/PaymentForm'


function PaymentePage(){
    return(
        <>
        <Header/>
        <main>
            <section>
                <h2>Shipping Information</h2>
                <PaymentForm/>
            </section>

            <section>
                <h2>Order Summary</h2>
                {/*produtos */}
                <input type="text" placeholder='Discount Code'/>
                <button type='button'>APPLY</button>
                <div>{/*exite maneira melhor de fazer isso, mais semantica? */}
                    <div>
                      <h3>Subtotal</h3>
                      <p>valor</p>
                    </div>
                    <div>
                        <h3>Shipping</h3>
                        <p>valor</p>
                    </div>
                    <div>
                        <h3>Estimated Tax</h3>
                        <p> valor </p>
                    </div>
                </div>
                <div>
                    <h3>Total</h3>
                    <p>valor</p>
                </div>
            </section>

        </main>
        <Footer/>
        </>
    )
}

export default PaymentePage