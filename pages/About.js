import Header from "../components/NovoHeader"
import Footer from "../components/Footer"
import styles from "../components/About.module.css"
import Link from "next/link"
import Head from "next/head"




export default function About(){

 
  
    
   
    
    return(
        
        <>
            <Head>
                    <title>Sobre_H-Sport</title>
                   <link rel="icon" href="/basketball.png" />
                    <link rel="stylesheet" href="owl-carousel/owl.theme.css"></link>
            </Head>
            <header className={styles.headertop}>
                   <Header/>
              </header>
           
         

        <div className={styles.section}/>
        <main id={styles.main}>
                <div className={styles.about}>
                    <h2>H-Sport</h2>
                    <hr/>
                    <p>
                        Se você é amante de esportes e também gosta de reunir para se divertir em um ambiente agradável e
                        familiar, então você está no lugar certo.
                        H-Sport é um dos principais clubes da região por ser conhecido por seus diversificados esportes. Aqui
                        temos Futebol, Natação, Basquete, Vôlei e Tênis com os melhores preços.
                    </p>

                    <hr/>
                    <div className={styles.planos}>
                        <div>
                            <img src="img/about/chute-removebg-preview.png" alt=""/>
                        </div>

                        <div>
                            <h3>Plano-mensal</h3>
                            <p>Por Apenas 39,90 você e os seus amigos podem aproveitar o máximo da diversão com direito a todos
                                os
                                esportes Disponíveis aqui na H-Sport.</p>
                            <div className={styles.btn}>
                                <button><a href="">Alugar</a> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <section className={styles.menu}>

                <div className={styles.menus}>

                    <div className={styles.container}>
                        <div> <img src="img/about/Campo de Futebol .jpg" alt=""/> </div>
                        <div className={styles.overlay}>
                            <div className={styles.text}>Campo de Futebol</div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div> <img src="img/about/quadra-basquente.webp" alt=""/> </div>
                        <div className={styles.overlay}>
                            <div className={styles.text}>quadra-basquente</div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div> <img src="img/about/quadrabasquete.webp" alt="" /> </div>
                        <div className={styles.overlay}>
                            <div className={styles.text}>Basquete</div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div> <img src="img/about/volei-de-praia.webp" alt="" /> </div>
                        <div className={styles.overlay}>
                            <div className={styles.text}>vôlei-de-praia</div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div> <img src="img/about/swimmers-79592_1920.webp" alt="" /> </div>
                        <div className={styles.overlay}>
                            <div className={styles.text}>Natação</div>
                        </div>
                    </div>
                    <div className={styles.container}>

                        <div> <img src="img/about/tenis.webp" alt="" /> </div>
                        <div className={styles.overlay}>
                            <div className={styles.text}>Tênis</div>
                        </div>
                    </div>


                </div>

            </section>

            <section className={styles.map}>
                <div>
                    <div>
                        <h3>Nosso Local</h3>
                    </div>
                    <iframe id="estilo"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.1744278486094!2d-43.57132670997601!3d-18.20190647477194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaebbede650fac9%3A0x1fbb43609f28ad04!2sDiamantina%20-%20Minas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1598066565026!5m2!1spt-BR!2sbr"
                    >
                    </iframe>
                        <style jsx>{`

                         iframes  {
                                width:600; 
                                height:450; 
                                frameborder:"0"; 
                                style:"border:0;" 
                                aria-hidden="false";
                                tabindex:"0"
                            }
                        
                        `}</style>


                </div>
                <div>
                    <h3 className={styles.contactos}>Contato</h3>

                    <form action="" id={styles["form-contacts"]}>

                        <div className={styles["label-float"]}>
                            <input type="text" placeholder=" " />
                            <label>Nome</label>
                        </div>

                        <div className={styles["label-float"]}>
                            <input type="email" placeholder=" " />
                            <label>Email</label>
                        </div>


                        <label for="mensagen"> Mensagem</label>
                        <textarea name="mensagen" id="" cols="23" rows="6" placeholder=" "></textarea>

                        <input type="submit" className={styles.btn} value="Enviar"/>

                    </form>
                </div>


            </section>



                    <Footer/>

                </>


            )

        }