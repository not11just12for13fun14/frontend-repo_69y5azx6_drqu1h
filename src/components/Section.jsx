import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {eyebrow && (
            <div className="text-[#00D1FF] text-xs font-semibold tracking-[0.2em] uppercase">{eyebrow}</div>
          )}
          {title && (
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-4 text-white/70 max-w-3xl">{subtitle}</p>
          )}
        </motion.div>

        <div className="mt-10">{children}</div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
