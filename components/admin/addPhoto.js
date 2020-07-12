import styles from './Button.module.css'
import Route from 'next/router'
import axios from 'axios'

const serverURL = 'https://hcode-lab-adonis-hsport.herokuapp.com'

export default function AddPhoto(props) {
    
    const handleClik = async (e) => {

        switch (props.action) {

            case 'foto':
               
                
                 await axios.post(`${serverURL}/admin/usuario/${props.id}/photo`, props.values)
                 window.location.href=("/admin/users")
                 alert("Foto alterada com sucesso")
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

    if (props.action == "foto"){
        return (
            //<input type='file' name='file' className={styles.button} />
            <button className={styles.delete} onClick={handleClik}>{props.children}</button>
        )
    } 
    
}