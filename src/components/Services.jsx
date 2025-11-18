import Section from './Section'
import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Digital Marketing Services',
    items: ['SEO', 'PPC Advertising', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Conversion Rate Optimization (CRO)', 'Analytics & Reporting'],
  },
  {
    title: 'Creative & Development',
    items: ['Website Development', 'Application Development', 'Video Production', 'Digital Content Creation'],
  },
  {
    title: 'Other Services',
    items: ['Event Management'],
  },
]

export default function Services() {
  return (
    <Section id="services" eyebrow="Our Roof" title="Services that scale performance.">
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-semibold">{g.title}</h3>
            <ul className="mt-4 space-y-2 text-white/80">
              {g.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
