import Link from "next/link"
import styles from "./NewHeader.module.css"
import React, { useState } from "react"
import LinkIntem from "./LinkItem"


export default function Nav(props) { // se eu quero usar uma informaçao de componente uso props

    const [isModalVisible, setIsModalVisible] = useState(false)
    const LinkMenu = (itens) => (

        <li>
            <Link href={itens.link} >
                <a title={itens.label}>{itens.label}</a>
            </Link>
        </li>

    )


    return (


        <>
            {/* <nav className={`${styles.menu} ${styles[props.isOpen]}`} >
            <ul className={styles.ul}>
          
                 <img src="imagens/Logo/13034__2_-removebg-preview-_2_.ico" alt="Logo"/>
              
              {LinkIntem.map( item => (
                  <LinkMenu key={item.id} link={item.link} label={item.label}/>
              ))
              }

            
            </ul>
        </nav> */}
       <div className={`${styles.header} ${styles[props.isOpen]}`}>

            <nav   className={`${styles.nav} ${styles[props.isOpen]}`}>
                <ul>
                    <Link href="/"> 
                    <a ><img className={styles.logo} src="img/Logo/13034__2_-removebg-preview-_2_.ico" alt="" /></a>
                    </Link>
{/* 
                    <li><a href="/">Home</a></li>
                    <li><a href="About">Sobre</a></li>
                    <li><a href="Contato">Contatos</a></li>
                    <li><a href="404">Novidades</a></li>

                    <li className={styles.cadastro}><a href="Cadastro">Cadastro/Login</a></li> */}

                      
              {LinkIntem.map( item => (
                  <LinkMenu key={item.id} link={item.link} label={item.label}/>
                  ))}

                  <Link href="/Cadastro">
                    <li className={styles.cadastro}><a href="Cadastro">Cadastro/Login</a></li>
                   
                  </Link>
                </ul>
            </nav>
        </div>


        </>

    )



}
