import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#363533'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <div>
      <Navbar
        mode={mode}
        toggleMode={toggleMode}
        title='TestUtils'
        link1='Home'
        link2='About'
      />
      <div className='container my-3'>
        <TextForm mode={mode} heading='Enter text to analyze below' />
      </div>
      {/* <About /> */}
    </div>
  )
}

export default App
