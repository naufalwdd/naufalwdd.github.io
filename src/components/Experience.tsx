import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { cvData } from '../data/cv';

export default function Experience() {
  return <section id="experience" className="section border-t border-white/[0.06] bg-[#0b0e11]">
    <div className="section-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
      <div><p className="eyebrow mb-4">01 / experience</p><h2 className="section-title max-w-sm">A track record of shipping with care.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-white/50">From retail operations to manufacturing workflows, I partner with teams to make software dependable, understandable, and ready for real-world use.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-lime hover:gap-3 transition-all">Discuss a project <ArrowUpRight size={16} /></a><div className="glass-soft mt-12 rounded-2xl p-5"><p className="font-mono text-[10px] uppercase tracking-[.18em] text-white/35">Education</p><p className="mt-3 text-sm font-bold text-white/80">{cvData.education[0].degree}</p><p className="mt-1 text-xs text-white/45">{cvData.education[0].institution} · {cvData.education[0].period}</p></div></div>
      <div className="space-y-4">
        {cvData.experience.map((job, index) => <motion.article key={job.company} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="glass group rounded-2xl p-5 transition hover:border-lime/30 md:p-6"><div className="flex gap-4"><div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime"><BriefcaseBusiness size={18} /></div><div className="min-w-0 flex-1"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="text-base font-extrabold text-white md:text-lg">{job.role}</h3><p className="mt-1 text-sm font-semibold text-lime/80">{job.company}</p></div><span className="font-mono text-[10px] uppercase tracking-wider text-white/35">{job.period}</span></div><p className="mt-4 text-sm leading-7 text-white/52">{job.summary}</p></div></div></motion.article>)}
      </div>
    </div>
  </section>;
}
