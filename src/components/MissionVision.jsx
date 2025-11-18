import Section from './Section'
import { motion } from 'framer-motion'

const Card = ({ title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
  >
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-3 text-white/70">{text}</p>
  </motion.div>
)

export default function MissionVision() {
  return (
    <Section id="mv" eyebrow="Mission & Vision" title="Grounded in purpose. Driven by outcomes.">
      <div className="grid md:grid-cols-2 gap-6">
        <Card
          title="Mission"
          text="To help clients achieve their marketing goals with creative, data-driven strategies that deliver measurable impact and long-term partnerships."
        />
        <Card
          title="Vision"
          text="To be the go-to digital partner delivering innovative strategies that solve real marketing challenges."
        />
      </div>
    </Section>
  )
}
