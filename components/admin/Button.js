import styles from './Button.module.css'
import Router from 'next/router'
import axios from 'axios'

const serverURL = 'https://hcode-lab-adonis-hsport.herokuapp.com'

export default function Button(props) {

    const handleClick = async (e) => {

        switch(props.action){

            case "edit":
                Router.push(`/admin/users/${props.id}`)
                break;
            case "save" :

           await axios.put(`${serverURL}/admin/usuario/${props.id}`, props.values) 
           alert("Alterado com sucesso")
           
                console.log('Salvando alterações')
                break;
            case "savePass":

            await axios.put(`${serverURL}/admin/usuario/${props.id}`, props.values)                
                 window.location.href=("/admin/users")
                alert('Salvando a senha')
                break;
            case "changePhoto":
             //  await axios.post(`${serverURL}/admin/usuario/${props.id}/photo`, props.values) 
              await axios.post(`${serverURL}/admin/usuario/${props.id}/uploads`, props.values)
               window.location.href=("/admin/users")
                alert('alterando a foto')
                break;
                    
        }


    }

    if(props.action != "changePhoto"){
        return (
            <button className={styles.button} onClick={ handleClick }>{props.children}</button>
        )
    }else{
        
        return (
            <input type='file' name='file' className={styles.button} />
        
            )
    }
}