import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-600 pb-12'>
      <h2 className='my-20 text-center text-4xl font-bold relative'>
        My Projects
        <div className="h-1 w-20 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-4"></div>
      </h2>

      <div className='max-w-6xl mx-auto px-4'>
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className='mb-16 group hover:bg-neutral-900/40 rounded-xl p-6 transition-all duration-300'
          >
            <div className='flex flex-wrap lg:justify-between items-center gap-8'>
              {/* Image Container */}
              <div className='w-full lg:w-1/3'>
                <div className='relative overflow-hidden rounded-xl group-hover:shadow-xl group-hover:shadow-green-500/10 transition-all duration-300'>
                  <img
                    className='w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500'
                    src={project.image}
                    alt={project.title}
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
              </div>

              {/* Content Container */}
              <div className='w-full lg:w-3/5'>
                <a 
                  href={project.link}
                  className='inline-block mb-3 group-hover:text-green-400 transition-colors duration-300'
                >
                  <h6 className='text-2xl font-bold'>{project.title}</h6>
                </a>
                
                <p className='mb-6 text-neutral-400 leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-3'>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-neutral-800/50 text-green-400 text-sm font-medium py-2 px-4 rounded-full
                        hover:bg-neutral-800 hover:scale-105 transition-all duration-300'
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

export default Projects