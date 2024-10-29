import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
  <div className='overflow-x-hidden text-neutral-300 min-h-screen relative'>
  <div className="absolute inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
  
  <div className='fixed top-0 -z-10 h-full w-full'></div>
  
  <div className='container mx-auto px-20'>
    <Navbar />
    <Hero />
    <About />
    <Technologies/>
    <Experience />
    <Projects />
    <Contact />
  </div>
</div>

  )
}

export default App