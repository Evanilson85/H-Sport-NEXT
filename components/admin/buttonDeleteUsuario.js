import styles from './Button.module.css'
import Route from 'next/router'
import axios from 'axios'

const serverURL = 'https://hcode-lab-adonis-hsport.herokuapp.com'

export default function ButtonUsuario(props) {
    
    const handleClik = async (e) => {

        switch (props.action) {

            case 'delete':
                await 
                 axios.delete(`${serverURL}/admin/usuario/${props.id}`, props.values)
            
                 window.location.href=("/admin/users")
                 alert("Usuario Apagado com sucesso")
                break;
                /**
                 * 
                 case 'deleteConta':
                 axios.delete(`${serverURL}/admin/users/${props.id}`, props.values)
                 alert(" Apagada com sucesso")
                 break;
                 */

        }
    }

    if (props.action == "delete"){
        return (
            <button className={styles.delete} onClick={handleClik}>{props.children}</button>
        )
    } 
    
}