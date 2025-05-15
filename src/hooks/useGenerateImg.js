import { useEffect, useState } from 'react'

export function useGenerateImg () {
  const [generateImg, setGenerateImg] = useState(false)

  const generateNewImg = () => {
    setGenerateImg(true)
  }

  useEffect(() => {
    if (generateImg) setGenerateImg(false)
  }, [generateImg])

  return { generateImg, generateNewImg }
}
