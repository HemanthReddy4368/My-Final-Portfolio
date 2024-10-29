import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { AiOutlineDocker } from "react-icons/ai";
import { AiOutlinePython } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-700 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < RiReactjsLine className='text-7xl text-cyan-300'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < AiOutlineDotNet className='text-7xl text-purple-800'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < SiMicrosoftsqlserver className='text-7xl text-yellow-300'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < AiOutlineDocker className='text-7xl text-cyan-300'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < AiOutlinePython className='text-7xl text-yellow-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < FaGithub className='text-7xl text-red-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < TbBrandCSharp className='text-7xl text-gray-300'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < RiTailwindCssFill className='text-7xl text-cyan-300'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4 bg-black'>
                < DiRedis className='text-7xl text-red-600'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies