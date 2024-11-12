import React from 'react'
import {PROJECTS} from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-600 pb-4'>
        <h2 className='my-20 text-center text-4xl font-bold'>
            My Projects
        </h2>
        <div>
            {PROJECTS.map((project,index)=> (
                <div key={index} className='mb-12 flex flex-wrap lg:justify-center items-center hover:transform hover:scale-105 transition-all duration-300'>
                    <div className='w-full lg:w-1/4 flex justify-center'>
                        <img 
                            className='rounded-2xl mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover' 
                            width={200} 
                            height={200} 
                            src={project.image} 
                            alt={project.title}
                            style={{
                                aspectRatio: '1/1',
                            }} 
                        />
                    </div>
                    <div className='w-full p-4 lg:w-3/4'>
                        <a href={project.link}><h6 className='mb-3 font-bold text-xl'>{project.title}</h6></a>
                        <p className='mb-4 text-neutral-400 leading-relaxed'>{project.description}</p>
                        <div className='flex flex-wrap gap-2'>
                            {project.technologies.map((tech,index)=>(
                                <span 
                                    key={index} 
                                    className='bg-neutral-900 rounded text-green-500 text-sm font-medium py-2 px-4'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects