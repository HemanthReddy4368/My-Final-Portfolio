import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className="border-b border-neutral-700 pb-16">
      {/* Section Title */}
      <h2 className="my-16 text-center text-5xl font-bold relative">
        Experience
        <span className="absolute left-1/2 -bottom-2 h-1 w-20 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500"></span>
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line for Timeline */}
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-neutral-800 lg:block"></div>

        {/* Timeline Items */}
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className={`relative mb-12 flex flex-col lg:flex-row items-center lg:items-start ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-0 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-purple-500 bg-neutral-900 lg:block"></div>

            {/* Year Section */}
            <div
              className={`w-full lg:w-1/2 lg:px-8 ${
                index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
              }`}
            >
              <p className="mb-2 text-lg font-medium text-purple-400">
                {experience.year}
              </p>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-xl bg-neutral-900/50 p-6 shadow-lg transition-all duration-300 hover:bg-neutral-900/80">
                <h6 className="mb-2 text-xl font-semibold text-neutral-200">
                  {experience.role}
                  <span className="ml-2 text-green-400">@ {experience.company}</span>
                </h6>
                <p className="mb-4 text-neutral-400 leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-green-900/30 px-4 py-1 text-sm font-medium text-green-400 transition-colors hover:bg-green-900/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience