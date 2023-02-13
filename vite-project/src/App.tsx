
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Technologies from './components/Technologies'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {


  return (
    <div className="App flex justify-center bg-[#01002F] text-white">
      <div className="flex flex-col justify-center w-[1065px]">
        
        <Home/>
        <Projects/>
        <Technologies/>
        <Skills/>
        
      </div>
      



    </div>
  )
}

export default App
