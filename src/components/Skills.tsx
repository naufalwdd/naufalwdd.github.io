import { motion } from 'framer-motion';
import { Braces, Database } from 'lucide-react';
import { cvData } from '../data/cv';

const groups = [
  { label: 'Languages', icon: Braces, items: cvData.skills.languages },
  { label: 'Frameworks & runtime', icon: Braces, items: cvData.skills.frameworks },
  { label: 'Data & tooling', icon: Database, items: [...cvData.skills.databases, ...cvData.skills.tools] },
];

export default function Skills() {
  return <section id="skills" className="section border-t border-white/[0.06] bg-[#090c0f]">
    <div className="section-shell"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow mb-4">03 / toolkit</p><h2 className="section-title">Tools I trust.</h2></div><p className="max-w-md text-sm leading-7 text-white/50">A pragmatic stack for building fast interfaces, resilient APIs, and products that can grow with the people using them.</p></div>
      <div className="grid gap-4 md:grid-cols-3">{groups.map((group, index) => { const Icon = group.icon; return <motion.div key={group.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="glass rounded-2xl p-6"><div className="mb-6 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-lime/10 text-lime"><Icon size={17} /></span><h3 className="text-sm font-extrabold">{group.label}</h3></div><div className="flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="rounded-lg border border-white/[0.10] bg-white/[0.035] px-3 py-2 font-mono text-[11px] text-white/65 transition hover:border-lime/40 hover:text-lime">{skill}</span>)}</div></motion.div> })}</div>
    </div>
  </section>;
}
