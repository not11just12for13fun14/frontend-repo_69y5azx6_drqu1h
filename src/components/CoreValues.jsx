import Section from './Section'
import { motion } from 'framer-motion'
import { Sparkles, Trophy, ShieldCheck, Users2, BookOpenCheck, Flame, Handshake } from 'lucide-react'

const values = [
  { icon: Sparkles, title: 'Innovation' },
  { icon: Trophy, title: 'Results-Oriented' },
  { icon: ShieldCheck, title: 'Integrity' },
  { icon: Users2, title: 'Collaboration' },
  { icon: BookOpenCheck, title: 'Continuous Learning' },
  { icon: Flame, title: 'Passion' },
  { icon: Handshake, title: 'Client-Centric' },
]

export default function CoreValues() {
  return (
    <Section id="values" eyebrow="Core Values" title="Principles that power our partnerships.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map(({ icon: Icon, title }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition"
          >
            <Icon className="text-[#00D1FF]" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <div className="mt-4 h-px bg-gradient-to-r from-[#00D1FF] to-transparent opacity-40 group-hover:opacity-80 transition" />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
