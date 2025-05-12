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
        <span className='label-char' style={{ '--index': 0 }}>I</span>
        <span className='label-char' style={{ '--index': 1 }}>n</span>
        <span className='label-char' style={{ '--index': 2 }}>t</span>
        <span className='label-char' style={{ '--index': 3 }}>r</span>
        <span className='label-char' style={{ '--index': 4 }}>o</span>
        <span className='label-char' style={{ '--index': 5 }}>d</span>
        <span className='label-char' style={{ '--index': 6 }}>u</span>
        <span className='label-char' style={{ '--index': 7 }}>c</span>
        <span className='label-char' style={{ '--index': 8 }}>e</span>
        <span className='label-char' style={{ '--index': 9 }}>&nbsp;</span>
        <span className='label-char' style={{ '--index': 10 }}>M</span>
        <span className='label-char' style={{ '--index': 11 }}>e</span>
        <span className='label-char' style={{ '--index': 12 }}>m</span>
        <span className='label-char' style={{ '--index': 13 }}>e</span>
        <span className='label-char' style={{ '--index': 14 }}>&nbsp;</span>
        <span className='label-char' style={{ '--index': 15 }}>T</span>
        <span className='label-char' style={{ '--index': 16 }}>e</span>
        <span className='label-char' style={{ '--index': 17 }}>x</span>
        <span className='label-char' style={{ '--index': 18 }}>t</span>
      </label>
    </div>
  )
}
