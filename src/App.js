import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'

function App() {
  return (
    <div>
      <Navbar title='TestUtils' link1='Home' link2='About' />
      <div className='container my-3'>
        <TextForm heading='Enter text to analyze below' />
      </div>
      <About />
    </div>
  )
}

export default App
