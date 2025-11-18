import Section from './Section'
import { motion } from 'framer-motion'

const items = new Array(6).fill(0).map((_, i) => ({ id: i + 1 }))

export default function CaseStudies() {
  return (
    <Section id="work" eyebrow="Our Award-Winning Work" title="Recognized for Best Use of Digital in OTC & Ayurveda Brands.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.0)_60%)]" />
            <div className="absolute inset-0 grid place-items-center text-white/70">Case Study {item.id}</div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <div className="w-10 h-0.5 bg-[#00D1FF]" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
