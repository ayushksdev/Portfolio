import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Background_Remover from "../assets/BGRemover.png";
import Movie_App from "../assets/Movie.jpeg";
import Indore_Plants from "../assets/IndorePlants.jpeg";
import Weather_App from "../assets/Weather.jpeg";
import Typing_Test from "../assets/TypingTest.jpeg";
import Tic_Tac_Toe from "../assets/TicTacToe.jpeg";
import Socially from "../assets/socially.png";
import SociallyVideo from "../assets/Socially.mp4"
import BackgroundRemover from "../assets/BGRemover.mp4";
import MovieApp from "../assets/Movie.mp4";
import IndorePlants from "../assets/IndorePlants.mp4";
import WeatherApp from "../assets/Weather.mp4";
import TypingTest from "../assets/TypingTest.mp4";
import TicTacToe from "../assets/TicTacToe.mp4";
import { AiFillGithub } from 'react-icons/ai';
import { FaPlayCircle } from 'react-icons/fa';

const projects = [
  {
    img: Background_Remover,
    video: BackgroundRemover,
    title: "Background Remover",
    description: "An AI-powered background remover tool built using React that automatically removes image backgrounds with precision and speed.",
    links: { site: "https://bg-remover-rouge-eta.vercel.app/", github: "https://github.com/ayushkumarsingh14/BG-Remover-back" },
  },
  {
    img: Socially,
    video: SociallyVideo,
    title: "Socially",
    description: "A modern social media platform built with Next.js featuring user authentication, posting, commenting, and a clean responsive UI.",
    links: { site: "https://socially-eight-umber.vercel.app/", github: "https://github.com/ayushksdev/Socially" },
  },
  {
    img: Movie_App,
    video: MovieApp,
    title: "Movie App",
    description: "A React-based movie application with dynamic search and detailed movie information.",
    links: { site: "https://movie1-zeta.vercel.app/", github: "https://github.com/ayushksdev/Movie" },
  },
  {
    img: Indore_Plants,
    video: IndorePlants,
    title: "IndorePlants",
    description: "Frontend of an e-commerce website for indoor plants, built to sharpen Tailwind CSS skills.",
    links: { site: "https://ayushkumarsingh14.github.io/Indoreplants/", github: "https://github.com/ayushksdev/Indoreplants" },
  },
  {
    img: Weather_App,
    video: WeatherApp,
    title: "Weather App",
    description: "A real-time weather application that shows temperature, humidity, wind speed, and conditions using live API data.",
    links: { site: "https://ayushksdev.github.io/TypingTest/", github: "https://github.com/ayushksdev/TypingTest" }, // Kept original links
  },
  {
    img: Typing_Test,
    video: TypingTest,
    title: "Typing Test",
    description: "A typing speed test application to measure typing accuracy and speed.",
    links: { site: "https://ayushkumarsingh14.github.io/TypingTest/", github: "https://github.com/ayushkumarsingh14/TypingTest" },
  },
  {
    img: Tic_Tac_Toe,
    video: TicTacToe,
    title: "Tic-Tac-Toe",
    description: "A Tic-Tac-Toe game with Easy and Hard modes using Minimax algorithm.",
    links: { site: "https://ayushkumarsingh14.github.io/Tic-Tac-Toe/", github: "https://github.com/ayushkumarsingh14/Tic-Tac-Toe" },
  },
];

const ProjectCard = ({ project, index, playingVideo, setPlayingVideo }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Rotate between -10 and 10 degrees based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isPlaying = playingVideo === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-20 gap-8 items-center`}
    >
      {/* Left/Right Side - 3D Image/Video Container */}
      <div className='w-full md:w-1/2 p-4 relative group preserve-3d' style={{ perspective: "1000px" }}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="relative w-full aspect-video rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.15)] will-change-transform bg-gray-800"
        >
          {isPlaying ? (
            <video
              src={project.video}
              className='w-full h-full object-cover rounded-xl shadow-2xl'
              controls
              autoPlay
            />
          ) : (
            <div className='relative w-full h-full cursor-pointer overflow-hidden rounded-xl' onClick={() => setPlayingVideo(index)}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={project.img}
                alt={project.title}
                className='w-full h-full object-cover transition duration-500'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 m-auto flex items-center justify-center opacity-80 group-hover:opacity-100 transition duration-300"
              >
                <div className="bg-purple-600/30 p-4 rounded-full backdrop-blur-md border border-purple-400/50">
                  <FaPlayCircle className="text-white text-5xl" />
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Right/Left Side - Text Content */}
      <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
        <motion.h3
          whileHover={{ x: 10 }}
          className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4 inline-block'
        >
          {project.title}
        </motion.h3>
        <p className='text-gray-300 mb-6 text-lg leading-relaxed font-light'>{project.description}</p>
        <div className='flex space-x-4'>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168,85,247,0.4)" }}
            whileTap={{ scale: 0.95 }}
            href={project.links.site}
            target="_blank"
            rel="noopener noreferrer"
            className='px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all'
          >
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(55,65,81,1)" }}
            whileTap={{ scale: 0.95 }}
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className='px-6 py-3 bg-gray-800 text-gray-200 border border-gray-600 rounded-lg shadow-lg transition-all flex items-center gap-2'
          >
            <AiFillGithub className='text-2xl' />
            <span>Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  return (
    <div className='max-w-[1100px] mx-auto p-6 py-24' id="portfolio">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-16 text-center tracking-tight'
      >
        Featured Projects
      </motion.h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            playingVideo={playingVideo}
            setPlayingVideo={setPlayingVideo}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
