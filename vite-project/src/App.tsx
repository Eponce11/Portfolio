
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Technologies from './components/Technologies'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {


  return (
    <div className="App flex justify-center bg-[#01002F] text-white relative">
      <Navbar/>
      <div className="flex flex-col justify-center w-[1065px]">
        <Home/>
        <Skills/>
        <Projects/>
        <Technologies/>
      </div>
      <Contact/>
    </div>
  )
}

export default App
