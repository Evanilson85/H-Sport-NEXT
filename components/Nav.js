import LinkItem from "./LinkItem"
import Link from "next/link"
import styles from "./Nav.module.css"
import LinkIntem from "./LinkItem"
import Modal from "./Modal"
import React, { useState } from "react"

export default function Nav(props){ // se eu quero usar uma informaçao de componente uso props

    const [isModalVisible, setIsModalVisible] = useState(false)
    const LinkMenu = (itens) => (

            <li>
                <Link href={itens.link} >
                <a title={itens.label}>{itens.label}</a>
                </Link>
            </li>

    )

    
return(

    
<>
        <nav className={`${styles.menu} ${styles[props.isOpen]}`} >
            <ul className={styles.ul}>
          
                 <img src="imagens/Logo/13034__2_-removebg-preview-_2_.ico" alt="Logo"/>
              
              {LinkIntem.map( item => (
                  <LinkMenu key={item.id} link={item.link} label={item.label}/>
              ))
              }

            
            </ul>
        </nav>
       
</>
    
)


    
}
