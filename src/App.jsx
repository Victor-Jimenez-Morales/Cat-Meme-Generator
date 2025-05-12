import { useEffect, useState } from 'react'

// Components
import Input from './components/Input'

// Styles
import './App.css'

function App () {
  const [text, setText] = useState(' ')
  const [imgUrl, setImgUrl] = useState()
  const [generate, setGenerate] = useState(false)

  useEffect(() => {
    if (!generate) return

    fetch(`https://cataas.com/cat/says/${text}?position=center&width=300&height=300&font=Impact&fontSize=50&fontColor=%23fff&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImgUrl(url)
      })
  }, [generate])

  useEffect(() => {
    if (imgUrl) setGenerate(false)
  }, [imgUrl])

  const handleGenerateImg = () => {
    setGenerate(true)
  }

  return (
    <main>
      <h1>Random Cat Meme Generator</h1>
      <section>
        <Input setText={setText} />
        <button onClick={handleGenerateImg}>Generate meme</button>
        {imgUrl && <img src={imgUrl} alt='Random cat image' />}
      </section>
    </main>
  )
}

export default App
