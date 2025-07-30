import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import  Contact  from './components/Contact'


function App() {

  return (
   <div className='scroll-smooth bg-gradient-to-br from-gray-900 to-[#2a0a0a]'>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Education/>
    <Contact/>
   </div>
  )
}

export default App
