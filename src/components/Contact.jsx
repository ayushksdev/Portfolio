import React from "react"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-black text-white">

      {/* LEFT SIDE - BIG IMPACT */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Let’s Build <br />
          Something <span className="text-purple-500">Crazy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-md"
        >
          Have an idea, project, or opportunity?
          Drop a message and let’s make it real.
        </motion.p>

        {/* Magnetic Button */}
        <motion.a
          href="#form"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-block px-8 py-4 bg-purple-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-500/50"
        >
          Start a Conversation →
        </motion.a>
      </div>

      {/* RIGHT SIDE - FLOATING FORM */}
      <div className="flex-1 flex justify-center items-center p-10">

        <motion.form
          id="form"
          initial={{ opacity: 0, y: 100, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          action="https://getform.io/f/bkkykdgb"
          method="POST"
          className="w-full max-w-md bg-[#0f0f0f] p-8 rounded-2xl shadow-2xl border border-purple-500/20"
        >
          <h2 className="text-2xl font-semibold mb-6">Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-3 bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full mb-6 p-3 bg-transparent border-b border-gray-600 focus:border-purple-500 outline-none"
          />

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px #a855f7"
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-purple-600 rounded-lg font-semibold"
          >
            Send 🚀
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact