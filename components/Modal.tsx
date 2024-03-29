import { XIcon } from '@heroicons/react/solid'
import MuiModal from '@mui/material/Modal'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { Element, Genre } from '../typings'

export const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)

  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState('')
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    if (!currentMovie) return

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          currentMovie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${currentMovie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      )
        .then((resp) => resp.json())
        .catch((err) => err.message)

      if (data?.videos) {
        const index = data?.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer'
        )
        setTrailer(data?.videos.results[index]?.key)
      }

      if (data?.genres) {
        setGenres(data.genres)
      }
    }

    fetchMovie()
  }, [currentMovie])

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClose={handleClose}>
      <>
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}'`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
          />
        </div>
      </>
    </MuiModal>
  )
}
