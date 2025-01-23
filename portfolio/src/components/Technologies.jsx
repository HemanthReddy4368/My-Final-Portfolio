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

const technologies = [
  { Icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
  { Icon: AiOutlineDotNet, color: "text-purple-500", name: ".NET" },
  { Icon: SiMicrosoftsqlserver, color: "text-red-500", name: "SQL Server" },
  { Icon: AiOutlineDocker, color: "text-blue-400", name: "Docker" },
  { Icon: AiOutlinePython, color: "text-yellow-400", name: "Python" },
  { Icon: FaGithub, color: "text-gray-300", name: "GitHub" },
  { Icon: TbBrandCSharp, color: "text-purple-400", name: "C#" },
  { Icon: RiTailwindCssFill, color: "text-cyan-500", name: "Tailwind CSS" },
  { Icon: DiRedis, color: "text-red-600", name: "Redis" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-700 pb-24">
      {/* Section Title */}
      <h2 className="my-16 text-center text-5xl font-bold relative">
        Technologies
        <span className="absolute left-1/2 -bottom-2 h-1 w-20 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500"></span>
      </h2>

      {/* Technologies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {technologies.map(({ Icon, color, name }, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center p-6 bg-neutral-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Glowing Effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 blur-md group-hover:opacity-100 transition duration-500"></div>

            {/* Icon */}
            <Icon className={`text-6xl ${color} transition-transform duration-300 group-hover:scale-110`} />

            {/* Technology Name */}
            <span className="mt-4 text-sm text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;