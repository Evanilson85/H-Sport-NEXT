import styles from "./NewHeader.module.css"
import Nav from "./Nav"
import React, {useState} from "react"

export default function NovoHeader() {


    const [open, setOpen] = useState(" ")

    const click = () =>{

        setOpen(open?"":"open")

    }
    

    return (
        <>


            <header id={styles.new}  >
              

                    <button className={styles.menu} onClick={click}><img src="img/menu/mobile-menu-icon-orange.png" alt=""  /></button>


                    <button id={styles.close}  className={styles[open]} onClick={click}  ><img src="img/menu/close.png" alt=""  onClick={click}  /></button>
                    <a href="Home.html">  <img id={styles["logo-header"]} src="img/Logo/13034__2_-removebg-preview-_2_.ico" alt=""  /></a>
                

            <Nav isOpen={open}/>
            </header>
        </>
    )

}