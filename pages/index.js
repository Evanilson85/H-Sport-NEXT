import Head from "next/head"
import styles from "../components/Home.module.css"
import Footer from "../components/Footer"
import Header from "../components/NovoHeader"
import Link from "next/link"


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
                                <hr/>
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

            <div id={styles["page-home"]}>
            <section id={styles.hsport}>
                <div className={styles.meio}>

                    <h2>Seja Bem-Vindo ao <br/> Club H-Sport</h2>

                    <p>Só aqui na H-Sport temos segurança, acompanhamento, profissionais e muito mais o tempo que desejar. E esse acompanhamento é para todos os membros da sua familía, desde as crianças até os idosos receberão assistência a todo tempo.  </p>
                </div>

                <div className={styles.flex}>

                <div className={styles.Sport}>
                                <div className={styles.container}>

                                    <img src="imagens/compactados/Sobre4.jpg" alt="ciclismo" className={styles.image}/>
                                    <div className={styles.overlay}>
                                        <div className={styles.text}>Ciclismo</div>
                                    </div>
                                </div>

                               

                                <div className={styles.container2}>
                                
                                        <img src="imagens/compactados/nataçao.jpg" alt="Natação" className={styles.image}/>
                                        <div className={styles.overlay}>
                                            <div className={styles.text}>Natação</div>
                                        </div>
                                </div>

                                <div className={styles.container3}>
                                
                                        <img src="imagens/compactados/quadraTenis.jpg" alt="Tênis" className={styles.image}/>
                                    
                                    <div className={styles.overlay}>
                                        <div className={styles.text}>Tênis</div>
                                    </div>
                                </div>

                               </div>
                        </div>

                </section>
              

                <main>
            <div className={styles.welcome}>

        


                <div className={styles.volei}>
                    <h3><a href="">Vôlei</a> </h3>
                    <div id="componete">
                         <style jsx>{  `
                         #componete
                          {
                            display:flex;
                           align-items: center;
                           }`}
                          </style>
                        <img src="img/page-home/pngocean.com (6).png" alt=""/>

                        <p>O objeto usado para a prática de vôlei é uma bola e o objetivo principal do jogo consiste na
                            marcação de pontos ao mandar a bola para o campo adversário e fazer com que ela toque o
                            chão.</p>
                    </div>
                </div>
            </div>

            <div className={styles.new}>
                <div className={styles["new-p"]}>
                    <p>Já imaginou estar em um lugar onde você e os amigos possam se divertir por tempo ilimitado?
                        Melhor ainda, treinar o seu Esporte favorito com a nossa equipe de profissionais qualificados?
                        Então
                        você está no lugar certo! Temos os Melhores Campos para sua Diversão.</p>

                    <div id={styles.btn}>
                        <button><a href="404.html">Novidades</a></button>
                    </div>
                </div>
                <div>
                    <img src="img/page-home/desktop/pngocean.com (7).png" alt=""/>
                </div>
            </div>

            <div className={styles.basquete}>
                <h3><a href="">Basquete</a></h3>
                <div className={styles["basquete-p"]}>
                    <img src="img/page-home/basquete.png" alt=""/>

                    <p>Quais são as principais características do basquete?
                        Características:Cesta é o nome comum que se dá ao encestar (fazer a bola passar por esse aro) e
                        então marcam-se pontos, dependendo do local e das circunstâncias da cesta: se for cesta dentro
                        do garrafão (nome comum dado à Área Restritiva) obtém-se dois pontos, se for fora da linha dos
                        6,25 metros obtém-se 3 pontos.</p>
                </div>
            </div>
        </main>


                </div>



                <section className={styles.local}>

                <div className={styles.hour}>
                    <h3>Horarios</h3>
                    <p>Terça - Domingo 8:30 a 18:30</p>
                </div>

                 <div className={styles.maps}>

                    <h3>Nossa Localização</h3>  
                    <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0486605524!2d-46.87548323122013!3d-23.681531507302186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1594140585979!5m2!1spt-BR!2sbr" title="Localização Hsport"></iframe>
                </div> 
                </section>
        <Footer/>

        </>

    )

}