
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import TechSkills from './components/TechSkills'

function App() {


  return (
    <div className="App flex justify-center bg-[#01002F] text-white">
      <div className="flex flex-col justify-center">
        <Home/>
        <TechSkills/>
      </div>
      



    </div>
  )
}

export default App
