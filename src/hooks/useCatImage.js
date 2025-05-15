import { useEffect, useState } from 'react'
import { getCatImageUrl } from '../services/getCatImageUrl'

export function useCatImage ({ generateImg, text }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!generateImg) return

    getCatImageUrl({ text }).then((url) => {
      setImgUrl(url)
    })
  }, [generateImg])

  return { imgUrl }
}
