import Section from './Section'
import { motion } from 'framer-motion'

export default function DigitalStrategy() {
  return (
    <Section id="strategy" eyebrow="Digital Strategy" title="Meaningful ecosystems over fleeting trends.">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl leading-relaxed text-white/90"
        >
          “We don’t chase trends. We build meaningful digital ecosystems that spark belief, drive conversion, and create lasting brand impact.”
        </motion.blockquote>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-3 text-white/80"
        >
          {['Multi-phase campaigns', 'Authentic content', 'Precision media boosting', 'Audience curation', 'Purpose-led brand repositioning'].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </Section>
  )
}
