import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/HemanthLogo.png'
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Disable scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [scrolled, isMenuOpen]);

  const navLinks = [
    { title: 'HOME', to: 'home' },
    { title: 'ABOUT', to: 'about' },
    { title: 'PROJECTS', to: 'projects' },
    { title: 'CONTACT', to: 'contact' },
  ];

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      url: 'https://www.linkedin.com/in/hemanth-reddy--', 
      hoverColor: 'hover:text-blue-400',
      shadowColor: 'hover:drop-shadow-[0_0_8px_#60A5FA]',
      label: 'LinkedIn'
    },
    { 
      icon: FaGithub, 
      url: 'https://github.com/HemanthReddy4368', 
      hoverColor: 'hover:text-purple-400',
      shadowColor: 'hover:drop-shadow-[0_0_8px_#C084FC]',
      label: 'GitHub'
    },
    { 
      icon: FaInstagram, 
      url: 'https://instagram.com', 
      hoverColor: 'hover:text-pink-400',
      shadowColor: 'hover:drop-shadow-[0_0_8px_#F472B6]',
      label: 'Instagram'
    },
    { 
      icon: FaXTwitter, 
      url: 'https://twitter.com', 
      hoverColor: 'hover:text-blue-400',
      shadowColor: 'hover:drop-shadow-[0_0_8px_#60A5FA]',
      label: 'Twitter'
    },
  ];

  return (
    <>
      <nav 
        className={`mb-20 flex items-center justify-between py-6 fixed top-0 left-0 right-0 z-50 px-4 md:px-20 transition-all duration-300 ease-in-out
        ${scrolled ? 'backdrop-blur-lg bg-black/30 shadow-lg' : 'backdrop-blur-sm bg-black/10'}`}
      >
        {/* Logo */}
        <Link 
          to="home"
          smooth={true}
          duration={500}
          className='flex flex-shrink-0 items-center cursor-pointer'
        >
          <img 
            className='w-10 hover:scale-110 transition-all duration-300' 
            src={logo} 
            alt="Hemanth Logo" 
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl z-50 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className='hidden md:flex items-center gap-8 text-sm font-medium'>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              className='cursor-pointer hover:text-purple-400 transition-all duration-300 hover:-translate-y-0.5'
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Desktop Social Links */}
        <div className='hidden md:flex items-center justify-center gap-6 text-xl'>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`${social.hoverColor} transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
                aria-label={social.label}
              >
                <Icon className={social.shadowColor} />
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 w-full h-full bg-black z-40 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full h-full gap-8">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-2xl font-semibold cursor-pointer hover:text-purple-400 transition-all duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center gap-8 mt-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${social.hoverColor} transition-all duration-300 text-2xl`}
                    aria-label={social.label}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className={social.shadowColor} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar