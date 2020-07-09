import header from '../../components/admin/headertopadmin.module.css'
import HeaderTitle from '../../components/admin/HeaderTitle.js'
import React from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import { handleAuthSSR } from '../../utils/auth'
import styles from '../../components/admin/admin.module.css'
import Link from 'next/link'

export default function Index(props) {
    
    const cookies = new Cookies()
    const serverUrl = 'https://hcode-lab-adonis-hsport.herokuapp.com'

    return (
        <>
            <div className={header.header1}></div>

            <HeaderTitle text="Área administrativa da Hsport" />

            <section className={styles.flex}>

                    <div className={styles.container}>

                        <div className={styles.img1}>
                            <img src="usuario.png" alt="usuario"/>
                        </div>
                        <div className={styles.btn1}>
                        <Link href="/admin/users"><a>
                            <button className={styles.btn}>usuario</button>
                            </a></Link>
                        </div>
                    </div>


                    <div className={styles.container}>

                        <div className={styles.img1}>
                            <img src="msm.jpg" alt="mensagem"/>
                        </div>
                        <div className={styles.btn1}>
                        <Link href="/admin/contact"><a>
                            <button className={styles.btn}>Contato</button>
                            </a></Link>
                        </div>
                    </div>

                    <div className={styles.container}>

                        <div className={styles.img1}>
                            <img src="usuario.png" alt="sair"/>
                        </div>
                        <div className={styles.btn1}>
                        <Link href="/"><a>
                        <button className={styles.btn}>sair</button>
                        </a></Link>
                    </div>
                    </div>
             </section>



        </>
    )

}

Index.getInitialProps = async (ctx) => {
    const res = await handleAuthSSR(ctx)
    return { "res" : res}
}