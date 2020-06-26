import React, {useState} from "react"
import Nav from './Nav'
import styles from "./Nav.module.css"

export default function Header(){


    const [open, setOpen] = useState('open-menu')

    const handleClick = ()=>{
        setOpen(open?'':'open-menu')
    }

return(

    <header>


        <button type="button" className={styles["abrir-menu"]} onClick={handleClick}>=</button>

        <button type="button" id={styles.fechar}  onClick={handleClick} className={styles[open]}>X</button>
                
       
    <Nav isOpen={open} />
    </header>
)


    
}
