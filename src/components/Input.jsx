// Styles
import './Input.css'

export default function Input ({ setText }) {
  const handleInputText = (event) => {
    const text = event.target.value
    setText(text)
  }

  return (
    <div className='wave-group'>
      <input required type='text' className='input' onChange={handleInputText} />
      <span className='bar' />
      <label className='label'>
        <span className='label-char' style={{ '--index': 0 }}>M</span>
        <span className='label-char' style={{ '--index': 1 }}>e</span>
        <span className='label-char' style={{ '--index': 2 }}>m</span>
        <span className='label-char' style={{ '--index': 3 }}>e</span>
        <span className='label-char' style={{ '--index': 4 }}>&nbsp;</span>
        <span className='label-char' style={{ '--index': 5 }}>T</span>
        <span className='label-char' style={{ '--index': 6 }}>e</span>
        <span className='label-char' style={{ '--index': 7 }}>x</span>
        <span className='label-char' style={{ '--index': 8 }}>t</span>
      </label>
    </div>
  )
}
