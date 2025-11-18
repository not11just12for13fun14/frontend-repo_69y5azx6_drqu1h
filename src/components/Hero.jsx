import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            We Build Digital Ecosystems That Drive Belief, Conversion & Lasting Impact.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Forward-thinking digital marketing & tech solutions for modern brands.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[#00D1FF] text-black font-semibold px-6 py-3 hover:brightness-110 transition">Work With Us</a>
            <a href="#work" className="rounded-full border border-white/20 hover:border-white/40 text-white px-6 py-3 transition">View Portfolio</a>
          </div>
        </motion.div>
      </div>

      {/* subtle lines overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#00D1FF_1px,transparent_1px)] [background-size:40px_40px]" />
    </section>
  )
}
