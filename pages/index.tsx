import Head from 'next/head'
import { Header, Banner } from '../components/index'
import { Movie } from '../typings'
import { requests } from '../utils/requests'

interface Props {
  netflixOriginals: Movie[]
  // trendingNow: Movie[]
  // topRated: Movie[]
  // actionMovies: Movie[]
  // comedyMovies: Movie[]
  // horrorMovies: Movie[]
  // romanceMovies: Movie[]
  // documentaries: Movie[]
}

const Home = ({ netflixOriginals }: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix - By Hamsa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner netflixOriginals={netflixOriginals} />

      <main>
        <section></section>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [netflixOriginals] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
    },
  }
}
