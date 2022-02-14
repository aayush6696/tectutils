import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, { useState } from 'react'
import Alert from './Components/Alert'
import About from './Components/About'

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })

    setTimeout(() => {
      setalert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#363533'
      showAlert('Dark Mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been enabled', 'success')
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
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm
          showAlert={showAlert}
          mode={mode}
          heading='Enter text to analyze below'
        />
      </div>
      <About mode={mode} />
    </div>
  )
}

export default App
