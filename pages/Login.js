import React, {useState} from "react"
import Link from "next/link"
import axios from "axios"
import {Cookies} from "react-cookie"
import Header from "../components/NovoHeader"
import styles from "../components/Login.module.css"
import Footer from "../components/Footer"

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
        //console.log("enviou o login")

        axios.post('https://hcode-lab-adonis-hsport.herokuapp.com/auths', valor).then(
            (res)=>{
                const tokenData = res.data.tokenData
                cookies.set('token', tokenData) // onde vou gravar o cookies  get eu pego o cookie set eu gravo o token que vem do banco de dados
                alert('usuario autorizado')
                window.location.href=("/admin")
            }).catch(err => alert("Infelizmente você não tem autorização", err)
            )

    }
    

    return(
        <>
            

               
                <main className={styles.meio}>

            <Header/>


                        {/* <form onSubmit={enviar} action="" className={styles.formulario}>

                            <h2>Email</h2>
                            <input type="email" name="email" className={styles.email} placeholder="Email" onFocus={focarlogin} onChange={focarlogin}/>

                            <h2>Senha</h2>
                            <input type="password" name="password" className={styles.senha} placeholder="Senha"  onFocus={focarlogin} onChange={focarlogin} />

                            <div className={styles.btn1}>
                                <input type="submit" value="Entrar" className={styles.btn} onFocus={focarlogin} onChange={focarlogin} />
                            </div>
                         </form> */}
                         <form action="" onSubmit={enviar} className={styles["for-cadastro"]} className={styles.formulario}>

                                 
                                    <h2>Email</h2>
                                    <input type="email" name="email" className={styles.email} placeholder="Email"onFocus={focarlogin} onChange={focarlogin}/>

                                   
                                    <h2>Senha</h2>
                                    <input type="password" name="password" className={styles.senha} placeholder="Digite a sua senha" onFocus={focarlogin} onChange={focarlogin}/>
                                    <div id={styles.bt}>
                                    <input type="submit" value="Entrar" className={styles.btn}/>
                                    <Link href="Cadastro">
                                        <button className={styles.btnLogin}><a> Voltar</a></button>
                                    </Link>
                                                        </div>


                                    </form>


                </main>


            <Footer/>

        </>
    )

}