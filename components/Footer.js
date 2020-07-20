import styles from "../components/Footer.module.css"

export default function Footer(){
    
    return(
        <>
        <footer className={styles.rodape}>
            <hr className={styles.row}/>
                <div className={styles["Footer-logo"]}>
                    <img src="imagens/Logo/13034__2_-removebg-preview-_2_.ico" alt="Logo"/>
    
                    <div className={styles.Endereco}>
                        <h2>Endereço</h2>
                        <p>Rua Hcodelab n5, <br/>Bairro Javascript CCS HTML5</p>
                    </div>
    
                    <div className={styles.contato}>
                        <h2>Fale Conosco:</h2>
                        <p>(055) 9985-6325</p>
                        <p>sporth823@gmail.com</p>
                    </div>
                    <div className={styles.email}>
                        <h2>Email</h2>
                        <p>sporth823@gmail.com</p>
                    </div>
                </div>
           
        
    
             <div className={styles.redes}>
    
            <div className={styles.net}>
                <a href="https://web.whatsapp.com/"><img src="imagens/redes/whatsapp.svg" className={styles.whatsapp}
                        alt="Whatsapp" /></a>
                <a href="https://www.facebook.com/hcodebr/"><img src="imagens/redes/facebook.svg" className={styles.facebook}
                        alt="Facebook" /></a>
                <a href="https://www.instagram.com/hcodebrasil/"><img src="imagens/redes/instagram-sketched.svg"
                        className={styles.Instagram} alt="Instagram" /></a>
                <a href="https://twitter.com/hcodebr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img
                        src="imagens/redes/twitter.svg" className={styles.Twitter} alt="Twitter" /></a>
            </div>
        </div>
        
        <hr className={styles.row2} />
       
        <div className={styles.banner}>
            <h3>Todos os Direitos reservados 2020 / <a href="/Direitos">POLITICA DE PRIVANCIDADE </a></h3>
        </div>
    </footer>
    
    </>
    )

}