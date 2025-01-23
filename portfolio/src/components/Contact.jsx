import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-600 pb-12'>
      <h2 className='my-20 text-center text-4xl font-bold relative'>
        Contact Me
        <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4"></div>
      </h2>

      <div className='max-w-xl mx-auto px-4'>
        <div className='space-y-8 text-center'>
          {/* Address */}
          <div className='group p-6 rounded-lg hover:bg-neutral-900/40 transition-all duration-300'>
            <div className='text-green-400 mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className='text-lg text-neutral-300 group-hover:text-white transition-colors duration-300'>
              {CONTACT.address}
            </p>
          </div>

          {/* Phone */}
          <div className='group p-6 rounded-lg hover:bg-neutral-900/40 transition-all duration-300'>
            <div className='text-green-400 mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a 
              href={`tel:${CONTACT.phoneNo}`} 
              className='text-lg text-neutral-300 group-hover:text-white transition-colors duration-300'
            >
              {CONTACT.phoneNo}
            </a>
          </div>

          {/* Email */}
          <div className='group p-6 rounded-lg hover:bg-neutral-900/40 transition-all duration-300'>
            <div className='text-green-400 mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a 
              href={`mailto:${CONTACT.email}`}
              className='text-lg text-neutral-300 group-hover:text-white transition-colors duration-300'
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact