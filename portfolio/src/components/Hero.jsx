import React from 'react'
import { HERO_CONTENT } from '../constants'
import profile_pic from '../assets/1.jpeg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="border-b border-neutral-700 pb-12 lg:mb-35">
      <div className="flex flex-wrap items-center">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Name */}
            <motion.h2
              className="pb-8 text-5xl font-bold tracking-tight lg:mt-16 lg:text-7xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hemanth <span className="text-purple-500">Reddy</span>
            </motion.h2>

            {/* Role */}
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-semibold tracking-tight text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.span>

            {/* Description */}
            <motion.p
              className="my-4 max-w-xl py-6 font-light tracking-tight text-neutral-400 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-4 mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button className="px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg border border-purple-500/30 text-purple-300 transition-all duration-300 hover:scale-105">
                View Projects
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-white/5 rounded-lg border border-neutral-700 text-neutral-300 transition-all duration-300 hover:scale-105">
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-12 lg:mt-0">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative group">
              {/* Glowing Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              {/* Profile Picture */}
              <img
                src={profile_pic}
                alt="profile"
                className="relative rounded-full w-80 h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero