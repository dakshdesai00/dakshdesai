import type { NextPage } from 'next'
import Head from 'next/head'
import style from "../styles/Home.module.scss"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Daksh Desai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.bg}>
        <Navbar />
      </main>
    </div>
  )
}

export default Home
