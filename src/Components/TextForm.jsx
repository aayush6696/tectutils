import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm({ heading }) {
  const [text, setText] = useState('Enter text here')

  let handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  let handleOnChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <div className='mb-3'>
        <h1>{heading}</h1>
        <textarea
          className='form-control'
          value={text}
          id='myBox'
          rows='8'
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>
        Convert To Uppercase
      </button>
    </div>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
  heading: 'You forgot to pass heading',
}
