import Image from 'next/image'
import { Movie } from '../typings'

interface Props {
  movie: Movie
}

export const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] ">
      <Image
        className="rounded-sm object-cover md:rounded"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
      />
    </div>
  )
}