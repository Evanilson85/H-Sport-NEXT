
import HeaderTitle from '../../../components/admin/HeaderTitle'
import styles from '../../../components/admin/Home.module.css'
import Card from '../../../components/admin/Card'
import Button from '../../../components/admin/Button'
import Layout from '../../../components/admin/Layout'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import { useState } from 'react'

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

                                <h2>{user.name}</h2>
                                
                                <p>{user.email}</p>

                                <p>{user.data}</p>

                            </div>

            
                        </div>
                        <Button id={user.id} action="edit">Editar</Button>
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

