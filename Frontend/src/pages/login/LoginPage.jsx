import styles from './LoginPage.module.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../../assets/images/loginImg.jpg' //Linh Le

function LoginPage(){
    //States
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [emailValid, setEmailValid] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)

    //Functions
    const validation = () => {
        let isValid = true

        if (!email) {
            setEmailError(true)
            setEmailValid(false)
            isValid = false
        } else {
            setEmailError(false)
            setEmailValid(true)
        }

        if (!password) {
            setPasswordError(true)
            setPasswordValid(false)
            isValid = false
        } else {
            setPasswordError(false)
            setPasswordValid(true)
        }

        return isValid
    }
    //Main Function
    const handleForm = (e) =>{
        e.preventDefault()
        
        const valid = validation();
        if(!valid){
            return
        }
        
    }
    //HTML/JSX
    return(
        <main className={styles.container}>
            <img src={loginImg} alt="green plant in brown wooden pot"/>
            <form onSubmit={handleForm}>
                <div className={styles.rowContainer}>
                    <h1>AESTHETE</h1>
                </div>

                <div className={styles.rowContainer}>
                    <h2>Welcome Back</h2>
                    <p>Please enter your details to access your curated collection.</p>
                </div>

                <div className={styles.rowContainer}>
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input 
                    type="email" 
                    placeholder='name@example.com' 
                    id='email'
                    value={email}
                    className={`
                        ${styles.inputEmail}
                        ${emailError ? styles.error : ''}
                        ${emailValid ? styles.success : ''}
                    `}
                    onChange={(e) =>{ setEmail(e.target.value)}}
                    />
                </div>

                <div className={styles.rowContainer}>
                    <div className={styles.labelPassword}>
                        <label htmlFor="password">PASSWORD</label>
                       <Link to="/forgot-password" className={styles.forgot}>Forgot Password?</Link>{/*ainda não possue link*/}
                    </div>
                    <input 
                    type="password" 
                    placeholder='*********' 
                    id='password'
                    value={password}
                    className={`
                        ${styles.inputPassword}
                        ${passwordError ? styles.error : ''}
                        ${passwordValid ? styles.success : ''}
                    `}
                    onChange={(e) =>{setPassword(e.target.value)}}
                    />
                </div>

                <div className={styles.rowContainer}>
                    <button type='submit' className={styles.loginButton}>SIGN IN</button>
                    <div className={styles.divider}>
                        <div></div>
                        <span>OR</span>
                        <div></div>
                    </div>
                    <button type='button' className={styles.googleButton}>CONTINUE WITH GOOGLE</button>
                </div>
            </form>
        </main>

    )
}

export default LoginPage