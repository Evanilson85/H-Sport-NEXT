import React, {useState} from "react"
import link from "next/link"
import axios from "axios"
import {Cookies} from "react-cookie"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../components/Cadastro.module.css"
import Head from "next/head"
export default function Cadastro(){



    
    const[valor, setValor] = useState({name:"",email:'',photo:'',data:'',level:'',password:''})

    const focarlogin = e => {

        const {name, value} = e.target

        setValor({...valor,[name]:value})
        console.log(name,value)
    }
    const formLogin = e =>{

        e.preventDefault() 

        axios.post(`https://hcode-lab-adonis-hsport.herokuapp.com/users`, valor).then(res => {
                   
            alert(`Olá ${res.data.name} seus dados foram cadastrado, acesse seu email de cadastro`)
            window.location.href=("/admin")
        }).catch(err => alert("Infelizmente algo deu errado", err)
        )

      //   console.log("enviou")

    }

    return(
        <>

            <Head>
                    <title>Cadastro_H-Sport</title>
                   <link rel="icon" href="/basketball.png" />
            </Head>


               <section className={styles.top}>

                <Header/>

              </section>

                   
            <main className={styles.main1}>

                    <div className={styles.cadastro}>
                        <img src="imagens/compactados/Cadastro-desktop.jpg" alt=""/>
                    </div>
                    <div className={styles["cadastro-mobile"]}>
                        <img src="imagens/Compactado-mobile/football-157930_1280.png" alt=""/>
                    </div>

                    <div className={styles["cadastro-desktop"]}>
                        <img src="imagens/Compactado-mobile/pasta/temas5.jpg" alt=""/>
                    </div>
                    <form action="" onSubmit={formLogin} className={styles["for-cadastro"]}>

                        <h2>Nome</h2>  
                        <input type="text" name="name" id={styles.name} placeholder="Nome" onFocus={focarlogin} onChange={focarlogin}/>

                        <h2>Email</h2>
                        <input type="email" name="email" id={styles.email} placeholder="Email"onFocus={focarlogin} onChange={focarlogin}/>

                        <h2>Nascimento</h2>
                        <input type="date" name="data" id={styles.date} onFocus={focarlogin} onChange={focarlogin}/>

                        <h2>Senha</h2>
                    <input type="password" name="password" id={styles.password} placeholder="Digite a sua senha" onFocus={focarlogin} onChange={focarlogin}/>
                    <div>
                        <input type="submit" value="Enviar" id={styles.btn}/>
                    </div>
                        

                    </form>


                    <div className={styles["cadastro-basquete"]}>
                        <img src="imagens/Compactado-mobile/basketball-155997_1280.png" alt=""/>
                    </div>


            </main>

            <Footer/>
        </>
    )


}