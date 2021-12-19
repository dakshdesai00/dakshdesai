import type { NextPage } from 'next'
import Head from 'next/head'
import ChooseMode from '../components/ChooseMode'
import style from "../styles/Home.module.scss"

const Home: NextPage = () => {
  return ( 
    <div>
      <Head>  
        <title>Daksh Desai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main className={style.bg}>
        <ChooseMode />
      </main>
    </div>
  )
} 

export default Home
