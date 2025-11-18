import Section from './Section'
import { motion } from 'framer-motion'
import { Phone, Mail, Globe } from 'lucide-react'

export default function Contact() {
  const items = [
    { icon: Phone, label: 'Sri Lanka', value: '+94 71 0405565 / +94 77 5041031' },
    { icon: Phone, label: 'Maldives', value: '+960 9298070' },
    { icon: Mail, label: 'Email', value: 'info@avanza.lk' },
    { icon: Globe, label: 'Website', value: 'www.avanza.lk' },
  ]

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s Work Together">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-4"
        >
          {items.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03]">
              <Icon className="text-[#00D1FF] mt-1" size={18} />
              <div>
                <div className="text-white/60 text-xs uppercase tracking-wider">{label}</div>
                <div className="text-white">{value}</div>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40" placeholder="Your name" />
          <input className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40" placeholder="Your email" />
          <textarea rows={4} className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40" placeholder="Tell us about your project" />
          <button className="rounded-full bg-[#00D1FF] text-black font-semibold px-6 py-3 hover:brightness-110 transition w-fit">Send Message</button>
        </motion.form>
      </div>
    </Section>
  )
}
