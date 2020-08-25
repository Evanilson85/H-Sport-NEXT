import Header from "../components/NovoHeader"
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
            <Header/>


                <div id={Styles.body}>

                        <div  className={Styles.fundo}>

                            <div>
                            <h1><b>E</b>rr<b>o</b>r 4<b>0</b>4</h1>
                        <div id="error" ><style jsx>{`
                        
                        #error{width: 50%; margin: 0 auto;}
                        
                        `}</style>
                            
                            <button><a href="/">Voltar Pagina inicial</a></button>
                        </div>

                            </div>
                        </div>
                        <main className={Styles.main}>
                            <video className={Styles.video} src="video/Train_Timelapse (1).mov" autoPlay loop></video>
            <Footer/>
                        </main>
                        </div>
        </>
    )




}