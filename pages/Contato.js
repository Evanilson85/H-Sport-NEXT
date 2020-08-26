import Header from "../components/NovoHeader"
import Footer from "../components/Footer"
import styles from '../components/Contato.module.css'
import Head from "next/head"
import axios from "axios"
import React, { useState } from "react"

export default function Contato() {

    const [valor, setValor] = useState({ name: "", email: '', fone: "", message: "" })

    const focarlogin = e => {

        const { name, value } = e.target

        setValor({ ...valor, [name]: value })
        console.log(name, value)
    }

    const msm = e => {

        e.preventDefault()
        //e.preventDefault() 
        axios.post(`https://hcode-lab-adonis-hsport.herokuapp.com/admin/contact`, valor).then(res => {

            alert(`Olá ${res.data.name} sua messagem foi enviada com sucesso, em breve entramos em contato`)
            // window.location.href=("/Contato") ///admin/users vou deixar para ir para a pagina de contato
        }).catch(err => alert("Infelizmente algo deu errado no envio, verifique se preencheu todos os campos", err)
        )


    }

    return (

             <>
            <Head>
                <title>Contato_H-Sport</title>
                <link rel="icon" href="/basketball.png" />
            </Head>

            <header className={styles.top}>
            </header>
            <main className={styles.middle}>
                <Header />

                <div className={styles.h1}>
                    <h1>Contato</h1>
                    <p>Fale conosco Estamos sempre dispostos a lhe ajudar</p>
                </div>
                <section className={styles["display-Mobile"]}>


                    <form action="" id={styles["form-contacts"]} onSubmit={msm}>

                        <div className={styles["label-float"]}>
                            <input type="text" placeholder=" " />
                            <label>Nome</label>
                        </div>

                        <div className={styles["label-float"]}>
                            <input type="email" placeholder=" " />
                            <label>Email</label>
                        </div>

                        <div className={styles["label-float"]}>
                            <input type="number" placeholder=" " />
                            <label>Numero</label>
                        </div>


                        <label for="mensagen"> Mensagem</label>
                        <textarea name="mensagen" id="" cols="23" rows="6" placeholder=" "></textarea>

                        <input type="submit" className={styles.btn} value="Enviar" />

                    </form>

                    <section className={styles.newContatos}>
                    <div>
                        <img src="img/contatos/clientes.jpg"/>
                        </div>

                </section>


                    <div className={styles.newMaps}>
                    <img src="img/contatos/contatos.svg"/>
                      </div>  
                 
        </section>


           
             <section className={styles.local}>

                <div className={styles.hour}>
                    <h3>Horarios</h3>
                    <p>Terça - Domingo 8:30 a 18:30</p>
                </div>

                <div className={styles.maps}>

<h2>Localização</h2>

<iframe className={styles.map}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.1744278486094!2d-43.57132670997601!3d-18.20190647477194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaebbede650fac9%3A0x1fbb43609f28ad04!2sDiamantina%20-%20Minas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1598066565026!5m2!1spt-BR!2sbr"
></iframe>
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

                <Footer />
        </>


    )


}