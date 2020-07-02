import Nav from "../components/Nav"
import Head from "next/head"
import Styles from "../components/Home.module.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Link from "next/link"


export default function Index(){


    return(

        <>
            <Head>
                    <title>H-Sport</title>
                   {/* <link rel="icon" href="/favicon-16x16.png" />*/  } 
            </Head>
            <header className={Styles.top}>

            <Header/>
                
            </header>

                <section className={Styles.info} >

                    <div className={Styles.title}>
                        <h1>
                            <b> H-SPORT </b>
                            <br />
                            <hr/>
                            Você está a um Gol da <b> Diversão </b>
                        </h1>
                    </div>

                    <div className={Styles.club}>
                        <div className={Styles.welcome}>
                            
                            <h2>Bem-Vindo <br/>ao  Club H-SPORT</h2>

                            <img src="imagens/chute.png"/>
                        </div>
                    </div>
                    </section>
                    <main>

                <div className={Styles.meio}>
                   
                    <div className={Styles.sport}>
                        <div className={Styles.text}>
                            <p>Já imaginou estar em um lugar onde você e os seus amigos possam se divertir por tempo ilimitado...
                            </p>
                        </div>
                    </div>
                    <div className={Styles.new}>
                        
                        <div className={Styles["text-2"]}>
                            <p>... Ou melhor, treinar o seu Esporte favorito com a nossa equipe de profissionais e
                                qualificados.
                                Temos os Melhores Campos para sua Diversão.</p>
                            </div>
                        </div>
                        <div className={Styles.novidades}>
                            <h3>Novidades</h3>
                    <div className={Styles.flex}>




                    <div className={Styles.Sport1}>
                    <div className={Styles.container}>
    
                        <img src="imagens/compactados/tenis.jpg" alt="quadea de tenis" className={Styles.image}/>
                        <div className={Styles.overlay}>
                            <div className={Styles.text3}>Tenis</div>
                        </div>
                    </div>
    
                    <div className={Styles.container1}>
    
                        <img src="imagens/compactados/quadra-basquente.jpg" alt="Quadra-basquente" className={Styles.image}/>
                        <div className={Styles.overlay}>
                            <div className={Styles.text3}>Basquete</div>
                        </div>
    
                    </div>
    
                    <div className={Styles.container2}>
    
                        <img src="imagens/compactados/swimmers-79592_1920.jpg" alt="Natação" className={Styles.image}/>
                        <div className={Styles.overlay}>
                            <div className={Styles.text3}>Natação</div>
                        </div>
                    </div>                
                </div>
            </div>
                    <div className={Styles.btn}>
                        <button>
                            <Link href="Cadastro">
                            <a>Inscreva-se</a>
                            </Link>
                            </button>
                    </div>
         </div>
     </div>
             </main>

        <Footer/>

        </>

    )

}