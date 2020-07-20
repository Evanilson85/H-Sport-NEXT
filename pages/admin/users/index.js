import HeaderTitle from '../../../components/admin/HeaderTitle'
import styles from '../../../components/admin/Home.module.css'
import Card from '../../../components/admin/Card'
import Button from '../../../components/admin/Button'
import Delete from '../../../components/admin/buttonDeleteUsuario'
import Layout from '../../../components/admin/Layout'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import { useState } from 'react'
import Update from "../../../components/upload"

const cookies = new Cookies()
const token = cookies.get('token')
const config = {
    header: {Authorization: `Bearer ${token}`}
}
const serverURL = "https://hcode-lab-adonis-hsport.herokuapp.com"

export default function Index(props) {

   const users = props.users

    return (
        
        <Layout>
            <HeaderTitle text={"Usuários"} />

            <section className={styles.users}>

                {users.map(user => (

                    <Card key={user.id}> 

                        <div className={styles['user-info']}>

                            <div className={styles['user-data']}>

                                <h2>Nome: <b>{user.name}</b></h2>
                                <hr/>
                                <p>Email: <b>{user.email}</b></p>
                                <hr/>
                             {/* <p>Foto: <br/>
                              <img src={`${serverURL}/admin/usuario/${user.id}/photo`} className={styles['user-photo']} /> </p>
                                <hr/>  */}
                                <p>Nascimento: <b>{user.data}</b></p>

                            </div>
                            
                            
                        </div>
                        <Button id={user.id} action="edit">Editar</Button>
                      
                      
                      <Delete id={user.id} action="delete">Excluir</Delete>
                      
                        
                    </Card>

                ))}

            </section>
        </Layout>
    )

}

Index.getInitialProps = async (ctx) => {
    let users = []
    users = await axios.get(`${serverURL}/admin/usuario`, config)

    return {
        "users": users.data
    }
}

