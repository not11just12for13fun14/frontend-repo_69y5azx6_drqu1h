import Section from './Section'
import { motion } from 'framer-motion'

const items = [
  'Topic research',
  'SEO copywriting',
  'Attention-grabbing headlines',
  'Content calendars',
  'Editing & QA',
  'Performance optimization',
]

export default function ContentStrategy() {
  return (
    <Section id="content" eyebrow="Creative Content Strategy" title="Content built to be found, felt, and shared.">
      <motion.ul
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-2 gap-3 text-white/80"
      >
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
            {item}
          </li>
        ))}
      </motion.ul>
    </Section>
  )
}
