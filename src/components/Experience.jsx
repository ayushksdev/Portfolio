import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const experiences = [
    {
        company: 'Build for India Hackathon',
        period: '2024',
        description:
            'Reached the semifinals among 25,000+ teams, securing a position in the top 80 globally.'
    },
    {
        company: 'Microsoft Office – Ideathon Event',
        period: '2024',
        description:
            'Organized and managed an Ideathon event in collaboration with Microsoft Office.'
    },
    {
        company: 'Hashtag Tech Society',
        period: '2024-Present',
        description:
            'Technical Team Head, leading and mentoring members on development initiatives.'
    },
    {
        company: 'DSA Mastery',
        period: '2024-2025',
        description:
            'Solved 140+ problems and mastered core data structures in Java.'
    }
]

const Experience = () => {
    const { scrollY } = useScroll()

    // Parallax background movement
    const yBg = useTransform(scrollY, [0, 800], [0, -200])

    return (
        <section className="relative py-20 overflow-hidden bg-black text-white">

            {/* 🔮 Background Glow (Parallax Layer) */}
            <motion.div
                style={{ y: yBg }}
                className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 top-10 left-10"
            />

            <h1 className="text-5xl font-bold text-center mb-20 relative z-10">
                Experience
            </h1>

            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-transparent opacity-40" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-20">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                            }`}
                    >
                        {/* Card */}
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotateY: index % 2 === 0 ? 8 : -8
                            }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="w-[320px] p-6 rounded-xl backdrop-blur-lg bg-white/5 border border-purple-500/30 shadow-lg hover:shadow-purple-500/30"
                        >
                            <h2 className="text-xl font-semibold">{exp.company}</h2>
                            <p className="text-purple-400 text-sm">{exp.period}</p>
                            <p className="text-gray-300 mt-3 text-sm">
                                {exp.description}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience