import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from '../components/Contato.module.css'
export default function Contato(){


    return(

        <>
        <header className={styles.top}>
        <Header/>
        </header>
        <main>

            <form action="" className={styles.formulario}>

                <h2>O seu nome</h2>  
                <input type="text" name="name" id={styles.name} placeholder="Nome"/>

                <h2>O seu email</h2>
                <input type="email" name="email" id={styles.email} placeholder="Email"/>

                <h2>Telefone</h2>
                <input type="tel" name="Telefone" id={styles.Telefone} placeholder="Ligamos para qual Numero ?"/>

                
                <label for="Mensagem"><h2>Mensagem</h2></label>

                <textarea name="Mensagem" id={styles.Mensagem} cols="10" rows="10" placeholder="Sua Mensagem"></textarea>
            <div>
                <input type="submit" value="Enviar" id={styles.btn}/>
                </div>
            </form>

           
        </main>

        <Footer/>
        </>


    )


}