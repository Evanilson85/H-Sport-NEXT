import React, {useState} from "react"
import link from "next/link"
import axios from "axios"
import {Cookies} from "react-cookie"
import Header from "../components/Header"
import Footer from '../components/Footer'
import styles from "../components/Login.module.css"

export default function Login(){

    
    const [ valor, setValor ] = useState({email:'' , password:''})
    const cookies = new Cookies(); // novo cookies
    let [ token , setToken] = useState(cookies.get('token') || null) // estou perguntando se tem um cookies gravando no compuntador se nao tiver segue em frente

    const focarlogin = e =>{

        const { name, value} = e.target
        
        setValor({...valor, [name]:value})
        console.log(name, value)
    }


    const enviar = e =>{

        e.preventDefault()
        console.log("enviou o login")

        axios.post('http://localhost:3333/auths', valor).then(
            (res)=>{
                const tokenData = res.data.tokenData
                cookies.set('token', tokenData) // onde vou gravar o cookies  get eu pego o cookie set eu gravo o token que vem do banco de dados
                alert('usuario autorizado')
                window.location.href=("/admin")
            }
        )

    }
    

    return(
        <>
            <section className={styles.top}>

            <Header/>

                </section>
                <main className={styles.login}>


                        <form onSubmit={enviar} action="" className={styles["login-form"]}>

                            <h2>Email</h2>
                            <input type="email" name="email" id={styles.email} placeholder="Email" onFocus={focarlogin} onChange={focarlogin}/>

                            <h2>Senha</h2>
                            <input type="password" name="password" id={styles.password} placeholder="Senha"  onFocus={focarlogin} onChange={focarlogin} />

                            <div>
                                <input type="submit" value="Entrar" id={styles.btn} onFocus={focarlogin} onChange={focarlogin} />
                            </div>
                         </form>

                </main>


            <Footer/>

        </>
    )

}