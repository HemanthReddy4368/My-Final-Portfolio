import React from 'react'
import {PROJECTS} from '../constants'
const Projects = () => {
  return (
    <div className='border-b border-neutral-600 pb-4'>
        <h2 className='my-20 text-center text-4xl'>
            My Projects
        </h2>
        <div>
            {PROJECTS.map((project,index)=> (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                        <img className='rounded-2xl mb-6' width={150} height={150} src={project.image} alt={project.title} />
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech,index)=>(
                            <span key={index} className='mr-2 bg-black rounded text-green-900 text-sm font-medium py-1 px-1'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects