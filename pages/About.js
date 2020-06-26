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
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum voluptates aliquid quae fuga nostrum sequi
                                    laudantium aperiam, velit consequatur iusto praesentium aspernatur ad neque doloribus at cumque quia quaerat
                                    non.
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio nulla, vero deserunt molestiae corporis
                                    alias a error vel consequuntur praesentium, enim quae officia exercitationem mollitia neque! Sint, ratione
                                    aliquid.  <br />
                                    container com os planos
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


                                </main>

            <Footer/>

        </>


    )

}