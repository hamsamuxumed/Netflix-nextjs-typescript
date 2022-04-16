import Image from 'next/image'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'

interface Props {
  netflixOriginals: Movie[]
}

export const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  console.log(movie)
  return (
    <>
      <div className="relative top-0 left-0 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </>
  )
}
