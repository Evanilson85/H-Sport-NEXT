import HeaderTitle from '../../../components/admin/HeaderTitle'
import styles from '../../../components/admin/Home.module.css'
import Card from '../../../components/admin/Card'
import Button from '../../../components/admin/ButtonContact'
import Layout from '../../../components/admin/Layout'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import Head from "next/head"

const cookies = new Cookies()
const token = cookies.get('token')
const config = {
    header: {Authorization: `Bearer ${token}`}
}


const serverURL = "https://hcode-lab-adonis-hsport.herokuapp.com"


export default function Contacts(props) {

    const users = props.users;
    
   
    return (
        
        <Layout>
        <Head>
             <title>Contact_H-Sport</title>
             <link rel="icon" href="/basketball.png" />
        </Head>

            <HeaderTitle text="Contatos" />

            <section className={styles.users}>

                {  users.map (user => (
                    
                    <Card  key={user.id}> {/* Poderemos fazer essa refatoração depois */}

                        <div className={styles['user-info']}>

                            <div className={styles['user-data']}>

                                <h2>Nome: <b>{user.name}</b></h2>
                                <hr/>
                                <p>Telefone: <b>{user.fone}</b></p>
                                <hr/>
                                <p>Email:<b> {user.email}</b></p>
                                <hr/>
                              <p>Mensagem: <b>{user.message}</b></p>
                            </div>

                        </div>
                     
                    </Card>

                ))}

            </section>
        </Layout>
    )

}


Contacts.getInitialProps = async (ctx) => {
    let users =[]
    users = await axios.get(`${serverURL}/admin/contact`, config)

    return {
        "users": users.data
    }
}