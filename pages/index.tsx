import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/index'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix - By Hamsa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section></section>
      </main>
    </div>
  )
}

export default Home
