import Header from "../components/NovoHeader"
import Footer from "../components/Footer"
import styles from '../components/Contato.module.css'
import Head from "next/head"
import axios from "axios"
import React, {useState} from "react"

export default function Contato(){

    const[valor, setValor] = useState({name:"",email:'',fone:"",message:""})

    const focarlogin = e => {

        const {name, value} = e.target

        setValor({...valor,[name]:value})
        console.log(name,value)
    }

    const msm = e =>{

        e.preventDefault()
        //e.preventDefault() 
        axios.post(`https://hcode-lab-adonis-hsport.herokuapp.com/admin/contact`, valor).then(res => {
                   
            alert(`Olá ${res.data.name} sua messagem foi enviada com sucesso, em breve entramos em contato`)
           // window.location.href=("/Contato") ///admin/users vou deixar para ir para a pagina de contato
        }).catch(err => alert("Infelizmente algo deu errado no envio, verifique se preencheu todos os campos", err)
        )
        

    }

    return(

             <>
         <Head>
             <title>Contato_H-Sport</title>
             <link rel="icon" href="/basketball.png" />
        </Head>

        <header className={styles.top}>
        </header>
        <main className={styles.middle}>
        <Header/>

            <div className={styles.h1}>
                <h1>Deixe aqui a sua Opinião </h1>
            </div> 
            <section className={styles["display-Mobile"]}>
            <form action="" className={styles.formulario} onSubmit={msm}>

                <h2>O seu nome</h2>  
                <input type="text" name="name" className={styles.nome} placeholder="Nome" onFocus={focarlogin} onChange={focarlogin}/>

                <h2>O seu email</h2>
                <input type="email" name="email" className={styles.email} placeholder="Email"onFocus={focarlogin} onChange={focarlogin}/>

                <h2>Telefone</h2>
                <input type="tel" name="fone" className={styles.fone} placeholder="Ligamos para qual Número ?" onFocus={focarlogin} onChange={focarlogin}/>

                
                <label for="Mensagem"><h2>Mensagem</h2></label>

                <textarea name="message" className={styles.msm} cols="10" rows="10" placeholder="Sua Mensagem ou sugestão " onFocus={focarlogin} onChange={focarlogin}></textarea>
            <div id={styles.bt}>
                <input type="submit" value="Enviar" className={styles.btn}/>
                </div>
            </form>
            <div className={styles.maps}>

            <h2>Localização</h2>  
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0486605524!2d-46.87548323122013!3d-23.681531507302186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1594140585979!5m2!1spt-BR!2sbr"></iframe>
            </div>
            <style jsx>
            {`.maps{
               width:600;
                height:"450"; frameborder:"0"; style:"border:0"; allowfullscreen=""; aria-hidden="false" tabindex="0"
            }
           `}
            </style>
        </section>
        </main>

        <Footer/>
        </>


    )


}