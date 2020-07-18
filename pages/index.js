import Nav from "../components/Nav"
import Head from "next/head"
import styles from "../components/Home.module.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Link from "next/link"
import Slide from "../components/slide"


export default function Index(){

    

    return(

        <>
            <Head>
                    <title>H-Sport</title>
                   <link rel="icon" href="/basketball.png" />
                   <meta name="description" content="Hsport é um club para a sua diversão"/>
            </Head>
        
                <header>

                <section className={styles.display}>

                    <div className={styles.top}>
            <Header/>
                        <div className={styles.info}>
                            <div className={styles.menu}>
                                <h1>H-SPORT <br/>
                                    <b> Você está a um Gol da </b> Diversão</h1>


                                <p>Você está procurando Diversão para sua familía? Venha fazer parte do nosso Clube</p>

                            </div>
                            <div id={styles.bt}>
                            <Link href="Cadastro">
                                                   
                                <input type="button" value="inscreva-se" className={styles.btn}/>
                                            </Link>
                            </div>

                        </div>
                    </div>


                </section>



                </header>

                <section id={styles.hsport}>
                <div className={styles.meio}>

                    <h2>Seja Bem-Vindo ao <br/> Club H-Sport</h2>

                    <p>Só aqui na H-Sport temos segurança, acompanhamento, profissionais e muito mais o tempo que desejar. E esse acompanhamento é para todos os membros da sua familía, desde as crianças até os idosos receberão assistência a todo tempo.  </p>

                </div>

                <div className={styles.flex}>

                    <div className={styles.container}>
                        <img src="../pagina inicial/Sobre.jpg" alt="Avatar" className={styles.image}/>
                        <div className={styles.overlay}>
                        <div className={styles.text}>Hello World</div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <img src="../pagina inicial/Sobre.jpg" alt="Avatar" className={styles.image}/>
                        <div className={styles.overlay}>
                        <div className={styles.text}>Hello World</div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <img src="../pagina inicial/Sobre.jpg" alt="Avatar" className={styles.image}/>
                        <div className={styles.overlay}>
                        <div className={styles.text}>Hello World</div>
                        </div>
                    </div>

                </div>

                </section>

                <main>

                <div className={styles.meio2}>

                    <div className={styles.black}>

                        <p>Vôlei</p>

                    </div>

                </div>

                <div className={styles.sport}>


                    <img src="../pagina inicial/chute.png" alt="chute"/>

                    <div>
                        <p>Já imaginou estar em um lugar onde você e os amigos possam se divertir por tempo ilimitado ?<br/>Melhor ainda, treinar o seu Esporte favorito com a nossa equipe de profissionais qualificados ?
                            Então você está no lugar certo! Temos os Melhores Campos para sua Diversão.</p>
                        <div className={styles.bt1}>
                        <Link href="error">
                            <input type="button" value="novidades" className={styles.btnsport}/>
                                            </Link>

                        </div>

                    </div>
                </div>

                <div className={styles.end}>

                    <div className={styles.blackend}>
                        <p>
                            Basquete
                        </p>

                    </div>

                </div>
                </main>

                <section className={styles.local}>

                <div className={styles.hour}>
                    <h3>Horarios</h3>
                    <p>Terça - Domingo 8:30 a 18:30</p>
                </div>

                <div className={styles.maps}>

                    <h3>Nossa Localização</h3>  
                    <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0486605524!2d-46.87548323122013!3d-23.681531507302186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1594140585979!5m2!1spt-BR!2sbr"></iframe>
                
                </div>

                </section>
        <Footer/>

        </>

    )

}