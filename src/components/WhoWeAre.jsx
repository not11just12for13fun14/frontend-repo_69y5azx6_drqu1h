import Section from './Section'
import { motion } from 'framer-motion'

export default function WhoWeAre() {
  return (
    <Section
      id="who"
      eyebrow="Who We Are"
      title="Forward-thinking. Human-centered. Impact-driven."
      subtitle="Avanza Labs is a forward-thinking team of strategists, data analysts, creatives, and digital marketers helping brands grow in the digital age. We focus on meaningful connections—not just clicks—to deliver measurable impact."
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="prose prose-invert max-w-none"
        >
          <ul className="space-y-3 text-white/80">
            <li>• Strategy-first approach grounded in data and empathy</li>
            <li>• Full-funnel thinking with measurable outcomes</li>
            <li>• Cross-functional team working as your in-house partner</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
        >
          <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,#00D1FF_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#00D1FF_0%,transparent_40%)] opacity-20" />
          <div className="absolute inset-0 grid place-items-center text-white/70">Clean, modern collaboration</div>
        </motion.div>
      </div>
    </Section>
  )
}
