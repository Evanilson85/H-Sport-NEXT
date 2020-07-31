import Header from "../components/Header"
import Footer from "../components/Footer"
import Styles from "../components/error.module.css"
import Head from "next/head"

export default function Error(){


    return(

        <>
            <Head>
                    <title>Error_H-Sport</title>
                   <link rel="icon" href="/basketball.png" />
            </Head>
                <section className={Styles.sectionErr}>
                    <div className={Styles.err}>
            <Header/>
                        <h1>404-Infelizmente você foi para reserva</h1>
                        <h2>404 - Bola furou</h2>
                    </div>
                </section>
            <Footer/>
        </>
    )




}