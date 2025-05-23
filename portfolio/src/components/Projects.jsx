import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-600 pb-20'>
      <h2 className='my-16 text-center text-5xl font-bold relative'>
        My Projects
        <div className="h-1.5 w-24 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mt-5 rounded-full"></div>
      </h2>

      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className='group bg-neutral-900/30 hover:bg-neutral-800/50 rounded-2xl overflow-hidden 
                        transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl 
                        hover:shadow-green-500/10 hover:translate-y-[-8px]'
            >
              {/* Image */}
              <div className='relative overflow-hidden h-56'>
                <img
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700'
                  src={project.image}
                  alt={project.title}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60'></div>
              </div>
              
              {/* Content */}
              <div className='p-6 flex flex-col flex-grow'>
                <a 
                  href={project.link}
                  className='inline-block mb-3 group-hover:text-green-400 transition-colors duration-300'
                >
                  <h3 className='text-2xl font-bold'>{project.title}</h3>
                </a>
                
                <p className='mb-6 text-neutral-400 leading-relaxed flex-grow'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className='bg-neutral-800 text-green-400 text-xs font-medium py-1.5 px-3 rounded-full
                        hover:bg-green-400 hover:text-neutral-900 transition-all duration-300'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className='bg-neutral-800 text-neutral-400 text-xs font-medium py-1.5 px-3 rounded-full'>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
              
              {/* View Project Button */}
              <div className='px-6 pb-6'>
                <a 
                  href={project.link}
                  className='block w-full py-3 text-center bg-gradient-to-r from-green-500 to-blue-500 
                            text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300'
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects