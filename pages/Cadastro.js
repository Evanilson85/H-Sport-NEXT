import React, {useState} from "react"
import link from "next/link"
import axios from "axios"
import {Cookies} from "react-cookie"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../components/Cadastro.module.css"
import Head from "next/head"



const serverURL = 'https://hcode-lab-adonis-hsport.herokuapp.com'

export default function Cadastro(){











    
    const[valor, setValor] = useState({name:"",email:'',data:'',photo:'',password:''})

    const focarlogin = e => {

        const {name, value} = e.target

        setValor({...valor,[name]:value})
        // console.log(name,value)
    }
    const formLogin = e =>{

        e.preventDefault() 

        axios.post(`https://hcode-lab-adonis-hsport.herokuapp.com/usuario`, valor).then(res => {
                   
            alert(`Olá ${res.data.name} seus dados foram cadastrados, acesse seu email de cadastro`)
            window.location.href=("/Contato") ///admin/users vou deixar para ir para a pagina de contato
        }).catch(err => alert("Infelizmente algo deu errado", err)
        )

      // https://hcode-lab-adonis-hsport.herokuapp.com/users  console.log("enviou")

    }

    
    return(
        <>

            <Head>
                    <title>Cadastro_H-Sport</title>
                   <link rel="icon" href="/basketball.png" />
            </Head>


                   
            <main className={styles.meio}>
                <Header/>


            <section className={styles.flex}>
            <div className={styles.azul}>
            </div>
            <div className={styles.vermelho}>
            <form action="" onSubmit={formLogin} className={styles["for-cadastro"]} className={styles.formulario}>

                    <h2>Nome</h2>  
                    <input type="text" name="name" className={styles.nome} placeholder="Nome" onFocus={focarlogin} onChange={focarlogin}/>

                    <h2>Email</h2>
                    <input type="email" name="email" className={styles.email} placeholder="Email"onFocus={focarlogin} onChange={focarlogin}/>

                    <h2>Nascimento</h2>
                    <input type="date" name="data" className={styles.data} onFocus={focarlogin} onChange={focarlogin}/>
                  
                    <h2>Senha</h2>
                    <input type="password" name="password" className={styles.senha} placeholder="Digite a sua senha" onFocus={focarlogin} onChange={focarlogin}/>
                    <div id={styles.bt}>
                    <input type="submit" value="Enviar" className={styles.btn}/>
                    </div>


                    </form>

            </div>
        </section>
                   

            </main>

        </>
    )



}