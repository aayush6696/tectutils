import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm({ heading }) {
  const [text, setText] = useState('')

  let handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  let handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  let handleClear = () => {
    let newText = ''
    setText(newText)
  }

  let handleOnChange = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <div className='container'>
        <div className='mb-3'>
          <h1>{heading}</h1>
          <textarea
            className='form-control'
            id='myBox'
            rows='8'
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').length} Words, {text.length} Characters
        </p>
        <p>Average time to read is {0.008 * text.split(' ').length} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
  heading: 'You forgot to pass heading',
}
