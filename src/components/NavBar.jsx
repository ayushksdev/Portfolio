import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-scroll"

const navItems = ["about", "portfolio", "contact"]

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [active, setActive] = useState("about")

    return (
        <>
            {/* 🔥 Floating Navbar */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black">

                <motion.div
                    initial={{ y: -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex items-center gap-10 px-8 py-4 rounded-full 
          bg-gray-900/70 backdrop-blur-xl border border-purple-500/20 
          shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                >
                    {/* LOGO */}
                    <span className="font-bold text-white tracking-wide">
                        Ayush
                    </span>

                    {/* DESKTOP NAV */}
                    <ul className="hidden md:flex gap-8 text-gray-300 relative">

                        {navItems.map((item) => (
                            <li key={item} className="relative">
                                <Link
                                    to={item}
                                    smooth
                                    duration={500}
                                    onClick={() => setActive(item)}
                                    className="cursor-pointer capitalize"
                                >
                                    <motion.span
                                        whileHover={{ color: "#a855f7" }}
                                        className="relative z-10"
                                    >
                                        {item}
                                    </motion.span>

                                    {/* 🔥 Active Glow Underline */}
                                    {active === item && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 -bottom-2 h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7]"
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* MOBILE BUTTON */}
                    <div className="md:hidden text-white" onClick={() => setNav(!nav)}>
                        {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                    </div>
                </motion.div>
            </div>

            {/* 📱 FULLSCREEN MOBILE MENU */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40"
                    >
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    to={item}
                                    smooth
                                    duration={500}
                                    onClick={() => setNav(false)}
                                    className="text-4xl text-gray-300 hover:text-purple-400 my-6 block capitalize"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar