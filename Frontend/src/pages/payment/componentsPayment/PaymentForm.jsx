import styles from './PaymentForm.module.css'


function PaymentForm(){
    return(
        <form action="">
                    <div>
                        <label htmlFor="">FIRST NAME</label>
                        <input type="text" placeholder='Enter first name'/>

                        <label htmlFor="">LAST NAME</label>
                        <input type="text" placeholder='Enter last name' />
                    </div>
                    <label htmlFor="">STREET ADDRESS</label>
                    <input type="text" placeholder='House number and street name' />
                    <div>
                        <label htmlFor="">CITY</label>
                        <input type="text" placeholder='New York' />

                        <label htmlFor="">POSTAL CODE</label>
                        <input type="text" placeholder='1001' />
                    </div>
                    <label htmlFor="">EMAIL ADDRESS</label>
                    <input type="email" placeholder='name@domain.com'/>

                    <h3>Shipping method</h3>
                    
                    <input type="radio" />{/*falta finalizar */}
                    <label htmlFor="">Standard Courier</label>
                    <input type="text" />
                    <label htmlFor="">Express Overnight</label>

                    <div>
                        <h3>Payment</h3>
                        <h3>icones de cartao</h3>
                    </div>
                    <label htmlFor="">CARD NUMBER</label>
                    <input type="text" placeholder='0000 0000 0000 0000'/>
                    <div>
                        <label htmlFor="">EXPIRY DATE</label>
                        <input type="text" placeholder='MM / YY' />

                        <label htmlFor="">CVV</label>
                        <input type="text" placeholder='123' />
                    </div>
                    <button type='submit'>COMPLETE PURCHASE - valor</button>
                    <p>By completing your purchase, you agree to our Terms of Service and Privacy Policy.</p>
                </form>
    )
}

export default PaymentForm