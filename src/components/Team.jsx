import Section from './Section'
import { motion } from 'framer-motion'

const people = [
  { name: 'Ishanka', role: 'Director Digital Marketing & Tech' },
  { name: 'Pasan', role: 'Director Client Services' },
  { name: 'Ashan', role: 'Project Manager' },
  { name: 'Sanodi', role: 'CMO Consultant' },
  { name: 'Prathiba', role: 'Client Account Executive' },
  { name: 'Manjula', role: 'Chief Copywriter' },
]

export default function Team() {
  return (
    <Section id="team" eyebrow="Meet Our Core Team" title="The people behind the performance.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-gradient-to-br from-[#00D1FF] to-white/10" />
              <div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-white/70 text-sm">{p.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
