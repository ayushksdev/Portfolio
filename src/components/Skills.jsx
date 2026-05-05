import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiGithubBadge,
} from "react-icons/di";
import { SiSpring, SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiGithubactions, SiVercel, SiNetlify, SiKubernetes, SiJenkins } from "react-icons/si";
import { FaJava, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Spring", icon: <SiSpring className="text-green-600" /> },
      { name: "REST APIs", icon: <AiOutlineApi className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-500" /> },
    ],
  },
  {
    category: "DevOps",
    technologies: [
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "Jenkins", icon: <SiJenkins className="text-red-600" /> },
      { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "CI/CD", icon: <SiGithubactions className="text-gray-300" /> },

    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I have worked on various frontend, fullstack, and DevOps projects. Check them{" "}
          <a href="Project" className="underline">
            there
          </a>.
        </p>

        <div className="flex flex-col space-y-8">
          {/* Frontend + Fullstack Row */}
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            {skills.slice(0, 2).map((skill, index) => (
              <div
                key={index}
                className="border p-6 rounded-lg shadow-lg w-full md:w-1/2"
              >
                <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skill.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DevOps Row */}
          <div className="flex justify-center">
            <div className="border p-6 rounded-lg shadow-lg w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4 text-center">{skills[2].category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills[2].technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
