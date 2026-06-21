import styles from './RegisterPage.module.css'
import loginImg from '../../assets/images/loginImg.jpg'

import { useState } from 'react'
import { Link } from 'react-router-dom'


function RegisterPage(){

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)
    const [nameValid, setNameValid] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [emailValid, setEmailValid] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)

    const [check, setCheck] = useState(false)


//functions
    const passwordValidation = () =>{
        const especiais = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

        if(password.length < 8){
            console.log("invalido")
            return false
        }


        for(let i = 0; i < password.length; i++){
            if(especiais.includes(password[i])){
                return true
            }
        }
        return false
    }


    const validation = () =>{//Melhorar logica, muita repetição
        let isValid = true

        if(!name){
            setNameError(true)
            setNameValid(false)
            isValid = false
        }else{
            setNameError(false)
            setNameValid(true)
        }

        if(!email){
            setEmailError(true)
            setEmailValid(false)
            isValid = false
        } else{
            setEmailError(false)
            setEmailValid(true)
        }
        if(!passwordValidation()){
            setPasswordError(true)
            setPasswordValid(false)
            isValid = false
        } else{
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
            return;
        }
    }


    return(
        <main className={styles.container}>
            <img src={loginImg} alt="green plant in brown wooden pot"/>
            <form onSubmit={handleForm}>
                <div className={styles.rowContainer}>
                 <h1>AESTHETE</h1>
                </div>
                <div className={styles.rowContainer}>
                    <h2>Join The Circle</h2>
                    <p>Create an account to access curated collections and exclusive archival objects.</p>
                </div>

                <div className={styles.rowContainer}>
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" 
                    placeholder="Joel Miller"
                    id='name'
                    value={name}
                    className={
                        `${styles.inputName}
                        ${nameError ? styles.error : ''}
                        ${nameValid ? styles.success : ''}
                    `}
                    onChange={(e) =>{setName(e.target.value)}}
                    />
                </div>

                <div className={styles.rowContainer}>
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input 
                    type="email" 
                    placeholder="name@example.com" 
                    id='email'
                    value={email}
                    className={
                        `${styles.inputEmail}
                        ${emailError ? styles.error : ''}
                        ${emailValid ? styles.success : ''}
                    `}
                    onChange={(e) =>{setEmail(e.target.value)}}
                    />
                    
                </div>

                <div className={styles.rowContainer}>
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                    type="password" 
                    placeholder="********" 
                    id='password'
                    value={password}
                    className={
                        `${styles.inputPassword}
                        ${passwordError ? styles.error : ''}
                        ${passwordValid ? styles.success : ''}
                    `}
                    onChange={(e) => {setPassword(e.target.value)}}
                    />
                    <span>Must be at least 8 characters including a symbol.</span>
                </div>

                <div className={`${styles.rowContainer} ${styles.containerCheck}`}>
                    <input type="checkbox" id='checkbox' value={check} className={styles.inputCheck}/>{/*Arrumar depois */}
                    <label htmlFor="checkbox">
                        I agree to the 
                        <a href="">Privacy Policy</a> 
                        and 
                        <a href="">Terms of Service</a>
                    </label>
                </div>

                <button type="submit" className={styles.createButton}>CREATE ACCOUNT</button>

                <span>Alredy have an account? <Link to='/login'>Sing in</Link></span>
                
            </form>
        </main>
    )
}

export default RegisterPage 