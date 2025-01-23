import React, { useState, useEffect } from 'react'
import logo from '../assets/HemanthLogo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`mb-20 flex items-center justify-between py-6 fixed top-0 left-0 right-0 z-50 px-20 transition-all duration-300 ease-in-out
      ${scrolled ? 'backdrop-blur-lg bg-black/30 shadow-lg' : 'backdrop-blur-sm bg-black/10'}`}>
        <div className='flex flex-shrink-0 items-center'>
            <img 
              className='w-10 hover:scale-110 transition-all duration-300 cursor-pointer' 
              src={logo} 
              alt="Hemanth Logo" 
            />
        </div>

        {/* Navigation Links */}
        <div className='hidden md:flex items-center gap-8 text-sm font-medium'>
            <a href="#home" className='hover:text-purple-400 transition-all duration-300 hover:-translate-y-0.5'>HOME</a>
            <a href="#about" className='hover:text-purple-400 transition-all duration-300 hover:-translate-y-0.5'>ABOUT</a>
            <a href="#projects" className='hover:text-purple-400 transition-all duration-300 hover:-translate-y-0.5'>PROJECTS</a>
            <a href="#contact" className='hover:text-purple-400 transition-all duration-300 hover:-translate-y-0.5'>CONTACT</a>
        </div>

        {/* Social Links */}
        <div className='flex items-center justify-center gap-6 text-xl'>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5'
              aria-label="LinkedIn"
            >
              <FaLinkedin className='hover:drop-shadow-[0_0_8px_#60A5FA]' />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5'
              aria-label="GitHub"
            >
              <FaGithub className='hover:drop-shadow-[0_0_8px_#C084FC]' />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5'
              aria-label="Instagram"
            >
              <FaInstagram className='hover:drop-shadow-[0_0_8px_#F472B6]' />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className='hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5'
              aria-label="Twitter"
            >
              <FaSquareXTwitter className='hover:drop-shadow-[0_0_8px_#60A5FA]' />
            </a>
        </div>
    </nav>
  )
}

export default Navbar