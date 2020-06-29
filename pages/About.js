import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../components/About.module.css"
export default function About(){


    return(

        <>

            <header className={styles.headertop}>
                   <Header/>
              </header>
            <main className={styles.info}>


                                <h1>
                                    H-Sport
                                </h1>
                                <p>
                                     
                                    Para amantes do esportes, que também gostam de reunir com amigos para se divertir, em um ambiente agradável e familiar, você está no lugar certo.<br/>
                                    A H-Sport é um dos principais clubes de esportes da região por ser conhecida pela seu diversificados esportes. Aqui temos Futebol, Natação, Basquete, Volei e Tenis e com os melhores preços.
                                </p>
                                <div className={styles.Sport}>
                                <div className={styles.container}>

                                    <img src="imagens/compactados/Campo de Futebol .jpg" alt="Campo de Futebol" className={styles.image}/>
                                    <div className={styles.overlay}>
                                        <div className={styles.text}>Hello World</div>
                                    </div>
                                </div>

                                <div className={styles.container1}>
                                    
                                        <img src="imagens/compactados/quadra-basquente.jpg" alt="Quadra-basquente" className={styles.image}/>
                                        <div className={styles.overlay}>
                                            <div className={styles.text}>Hello World</div>
                                        </div>
                                    
                                </div>

                                <div className={styles.container2}>
                                
                                        <img src="imagens/compactados/swimmers-79592_1920.jpg" alt="Natação" className={styles.image}/>
                                        <div className={styles.overlay}>
                                            <div className={styles.text}>Hello World</div>
                                        </div>
                                </div>

                                <div className={styles.container3}>
                                
                                        <img src="imagens/compactados/tenis.jpg" alt="Tenis" className={styles.image}/>
                                    
                                    <div className={styles.overlay}>
                                        <div className={styles.text}>Hello World</div>
                                    </div>
                                </div>

                                <div className={styles.container4}>
                                    
                                        <img src="imagens/compactados/volei de praia.jpg" alt="Volei de praia" className={styles.image}/>
                                    
                                        <div className={styles.overlay}>
                                            <div className={styles.text}>Hello World</div>
                                        </div>
                                </div>
                                <div className={styles.container5}>
                                
                                        <img src="imagens/compactados/Campo de Futebol .jpg" alt="Campo de Futebol" className={styles.image}/>
                                    
                                        <div className={styles.overlay}>
                                            <div className={styles.text}>Hello World</div>
                                        </div>
                                </div>
                                </div>

                                <div className={styles.planos}>

                            <div className={styles.plano1}>
                                <h2>Plano-mensal</h2>
                                <p>Por Apenas <b>39,90</b> você e os seus amigos pode aproveitar o maximo da diversão com direito a
                                    todos os esportes disponiveis aqui na H-Sport.</p>

                            

                                <div className={styles.b}>
                                    <button  className={styles["btn-aluguel"]}><a href="">Alugar</a></button>
                                </div>
                            </div>
                            


                            <div className={styles.plano2}>
                                <h2>Plano-Anual</h2>

                                <p>O nosso plano Anual tem muitas vantagens, você tem os mesmo direitos do plano-mensal e alem disso
                                    pode treinar com a nossa equipe de profissionais e qualificados para ajudar você a ficar
                                    profissional no seu esporte preferido por apenas <b>299,00</b></p>

                            
                                
                                <div className={styles.c} >
                                    <button  className={styles["btn-compra"]}><a href="">Comprar</a></button>
                                </div>
                            </div>
                            </div>

                                </main>

            <Footer/>

        </>


    )

}