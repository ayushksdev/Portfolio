import React, { useRef } from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { DiJavascript1, DiReact, DiJava } from "react-icons/di";
import { SiSpringboot, SiDocker } from "react-icons/si";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 500], [0, 150]);
  const bgY = useTransform(scrollY, [0, 500], [0, 200]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 50, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const springXInverse = useSpring(
    useTransform(mouseX, (x) => -x),
    springConfig
  );

  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x * 30);
      mouseY.set(y * 30);
    });
  };

  const icons = [
    { Icon: DiJava, color: "#007396" },
    { Icon: SiSpringboot, color: "#6DB33F" },
    { Icon: SiDocker, color: "#2496ED" },
    { Icon: DiReact, color: "#61DAFB" },
    { Icon: DiJavascript1, color: "#F7DF1E" },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen mt-20 pt-16 relative flex flex-col justify-center bg-black overflow-hidden"
    >
      {/* 🔮 Background Orbs */}
      <motion.div
        style={{ y: bgY }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-[20%] left-[10%] w-[300px] md:w-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10"
      />

      <motion.div
        style={{ y: bgY }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-[10%] right-[10%] w-[250px] md:w-[400px] rounded-full blur-[100px] -z-10"
      />

      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid md:grid-cols-2 place-items-center gap-8 relative z-10">

          {/* LEFT */}
          <motion.div
            style={{ y: textY, x: springXInverse }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Java Developer", 1000,
                "Spring Boot Backend Engineer", 1000,
                "React Developer", 1000,
                "Building Scalable Systems", 1000,
              ]}
              speed={50}
              repeat={Infinity}
              className="font-bold text-transparent bg-clip-text text-xl md:text-4xl mb-4"
            />

            <h1 className="text-gray-100 md:text-7xl text-5xl font-extrabold mb-4">
              HEY, I AM <br />
              <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                Ayush Kumar Singh
              </span>
            </h1>

            <p className="text-gray-300 max-w-[500px] text-lg mb-8">
              Full Stack Developer specializing in Java (Spring Boot) and React,
              focused on building scalable backend systems and modern web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px ",
                }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1vifhADw78JzFeywRIEGdmT8ZAzTnSb76/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              >
                Download CV
              </motion.a>

              <div className="flex gap-6 text-3xl text-gray-300">
                <motion.a whileHover={{ scale: 1.2, y: -5, color: "#a855f7" }} href="https://github.com/ayushksdev">
                  <AiOutlineGithub />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, y: -5, color: "#a855f7" }} href="https://www.linkedin.com">
                  <AiOutlineLinkedin />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, y: -5, color: "#a855f7" }} href="https://instagram.com">
                  <AiOutlineInstagram />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{ x: springX, y: springY }}
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] md:w-[380px] h-[300px] md:h-[380px] rounded-full border border-purple-500/30 border-dashed"
            />

            {/* ✅ FIX: removed purple glow causing bleed */}

            <div className="relative rounded-full overflow-hidden border-[3px] border-purple-400/50 shadow-[0_0_40px_rgba(168,85,247,0.5)]">
              <img
                src={profilepic}
                className="w-[260px] md:w-[320px] h-[260px] md:h-[320px] object-cover rounded-full"
                alt="Ayush Kumar Singh profile picture"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="mt-24 flex flex-wrap justify-center gap-8 px-6">
        {icons.map(({ Icon, color }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.3, y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
            className="text-5xl md:text-6xl"
            style={{ color }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Shine */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;