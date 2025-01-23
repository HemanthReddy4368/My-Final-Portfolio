import React from 'react'
import about from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-12">
      {/* Section Title */}
      <h2 className="my-16 text-center text-5xl font-bold relative">
        About Me
        <span className="absolute left-1/2 -bottom-2 h-1 w-20 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500"></span>
      </h2>

      {/* Content */}
      <div className="flex flex-wrap items-center justify-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-5/12">
          <div className="relative group">
            {/* Glowing Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            {/* Image */}
            <img
              className="relative rounded-2xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              src={about}
              alt="About Me"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-5/12">
          <p className="text-lg leading-relaxed text-neutral-300">
            {ABOUT_TEXT}
          </p>

          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '20+', label: 'Projects Completed' },
              { number: '15+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-300"
              >
                <span className="text-3xl font-bold text-purple-400">
                  {stat.number}
                </span>
                <span className="text-sm text-neutral-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About