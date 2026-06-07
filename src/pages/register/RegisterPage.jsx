import styles from './RegisterPage.module.css'

import { useState } from 'react'



function RegisterPage(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [check, setCheck] = useState()


    return(
        <main>
            <img src="" alt="" />
            <form action="">
                <h1>AESTHETE</h1>
                <h2>Join The Circle</h2>
                <p>Create an account to access curated collections and exclusive archival objects.</p>

                <div>
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" 
                    placeholder="Joel Miller"
                    id='name'
                    onChange={(e) =>{setName(e.target.value)}}
                    />
                </div>

                <div>
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input 
                    type="email" 
                    placeholder="name@example.com" 
                    id='email'
                    onChange={(e) =>{setEmail(e.target.value)}}
                    />
                    <span>Must be at least 8 characters including a symbol.</span>
                </div>

                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                    type="password" 
                    placeholder="********" 
                    id='password'
                    onChange={(e) => {setPassword(e.target.password)}}
                    />
                </div>

                <div>
                    <input type="checkbox" id='checkbox'/>
                    <label htmlFor="checkbox">
                        I agree to the 
                        <a href="">Privacy Policy</a> 
                        and 
                        <a href="">Terms of Service</a>
                    </label>
                </div>

                <button type="submit"></button>

                <span>Alredy have an account? <a href="">Sing in</a></span>
                
            </form>
        </main>
    )
}