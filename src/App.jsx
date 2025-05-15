import { useState } from 'react'

// Hooks
import { useCatImage } from './hooks/useCatImage'
import { useGenerateImg } from './hooks/useGenerateImg'

// Components
import Input from './components/Input'

// Styles
import './App.css'

export default function App () {
  const [text, setText] = useState(' ')
  const { generateImg, generateNewImg } = useGenerateImg()
  const { imgUrl } = useCatImage({ generateImg, text })

  const handleClick = () => {
    generateNewImg()
  }

  return (
    <main>
      <h1>Random Cat Meme Generator</h1>
      <section>
        <Input setText={setText} />
        <button onClick={handleClick}>Generate meme</button>
        {imgUrl && <img src={imgUrl} alt='Random cat image' />}
      </section>
    </main>
  )
}
