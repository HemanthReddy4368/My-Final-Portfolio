import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa' // Added react-icons

const ContactCard = ({ icon, content, href, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className='group relative overflow-hidden rounded-2xl bg-neutral-900/40 p-8 hover:bg-neutral-800/40 transition-all duration-500'
  >
    {/* Gradient Border */}
    <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-2xl"></div>
    
    {/* Content Container */}
    <div className='relative z-10'>
      {/* Icon */}
      <div className='text-green-400 mb-4 transform group-hover:scale-110 transition-transform duration-300'>
        {icon}
      </div>
      
      {/* Content */}
      {href ? (
        <a 
          href={href}
          className='block text-center'
          target={href.startsWith('mailto') ? '_blank' : undefined}
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <div className='text-lg md:text-xl text-neutral-300 group-hover:text-white transition-colors duration-300 text-center'>
          {content}
        </div>
      )}
    </div>
    
    {/* Hover Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </motion.div>
)

const Contact = () => {
  return (
    <div id="contact" className='container mx-auto px-4 py-16 md:py-24'>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <h2 className='text-4xl md:text-5xl font-bold mb-4'>
          Contact Me
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 mx-auto"></div>
        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-lg">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </motion.div>

      {/* Contact Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {/* Address Card */}
        <ContactCard
          icon={
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-green-400/20 mx-auto">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
          }
          content={CONTACT.address}
          delay={0.2}
        />

        {/* Phone Card */}
        <ContactCard
          icon={
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-green-400/20 mx-auto">
              <FaPhone className="w-6 h-6" />
            </div>
          }
          content={
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 hover:text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 mx-auto">
              {CONTACT.phoneNo}
            </span>
          }
          href={`tel:${CONTACT.phoneNo}`}
          delay={0.4}
        />

        {/* Email Card */}
        <ContactCard
          icon={
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-green-400/20 mx-auto">
              <FaEnvelope className="w-6 h-6" />
            </div>
          }
          content={
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 hover:text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 group-hover:scale-105">
              <FaEnvelope className="w-4 h-4" />
              <span className="truncate">{CONTACT.email}</span>
            </span>
          }
          href={`mailto:${CONTACT.email}`}
          delay={0.6}
        />
      </div>

      {/* Optional: Add a contact form or additional information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-12 text-neutral-400"
      >
        <p className="max-w-2xl mx-auto">
          Looking forward to connecting with you! I'm always open to discussing new projects, 
          creative ideas, or opportunities to be part of your visions.
        </p>
      </motion.div>
    </div>
  )
}

export default Contact